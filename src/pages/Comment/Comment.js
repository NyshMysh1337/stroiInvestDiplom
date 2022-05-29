import React, {useEffect, useState} from 'react';
import {useFething} from "../../hooks/useFetchings";
import InfoHome from "../../API/InfoHome";
import GetComment from "../../component/GetComment/GetComment";
import style from './Comment.module.css'
import Footer from "../../component/Footer/Footer";


const Comment = () => {
    const [comment, setComment] = useState([])
    const [bodyComment, setBodyComment] = useState({
        name: '',
        body: ''
    })
    const [fetchComment] = useFething(async () => {
        const response = await InfoHome.getComment()
        setComment(response.data)
    })

    const [fetchPOSTComment] = useFething(async () => {
        const response = await InfoHome.postComment(bodyComment)
        setBodyComment(response.data)
    })

    useEffect(() => {
        fetchComment()
    }, [])

    const addComment = (e) => {
        e.preventDefault()

       setComment([...comment, {...bodyComment, id:Date.now()}])
        setBodyComment({name: '', body: ''})
        fetchPOSTComment()
    }

    return (
        <div className={style.comment_body}>
            <h1 className={style.zag_body}>Отзывы о нашей компании</h1>
            {comment.map((el, index) =>
                <GetComment index={index} key={el.id} comment={el}/>
            )}
            <div>
                <form className={style.input_body_wrapper}>
                    <div>
                        <input className={style.input_comment}
                               type='text'
                               placeholder='Введите имя'
                                value={bodyComment.name}
                               onChange={e => setBodyComment({...bodyComment, name: e.target.value})}
                        /><br/>

                        <input className={style.input_comment}
                               type='text'
                               placeholder='Введите комментарий'
                               value={bodyComment.body}
                               onChange={e => setBodyComment({...bodyComment, body: e.target.value})}
                        />
                    </div>
                </form>
                <div className={style.btn_body}>
                    <button className={style.button_comment} onClick={addComment}>Отправить комментарий</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Comment;