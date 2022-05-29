import React, {useState} from 'react';
import style from './Form.module.css'
import {useFething} from "../../hooks/useFetchings";
import InfoHome from "../../API/InfoHome";

function FormApplication({visible, setVisible}) {


    const [order, setOrder] = useState({
        id: Date.now(),
        name: "",
        email: "",
        phone: ""
    })
    const [fetchOrder,isLoading, setIsLoading] = useFething(async () => {
        const response = await InfoHome.postOrder(order)
        setOrder(response.data)
    })

    const onClickBtn = (e) => {
        e.preventDefault()
        fetchOrder()
        setOrder({name: '', email: '', phone: ''})
        setVisible(false)

    }

    return (
        <div className={style.form_wrapper}>
            <form className={style.input_body_wrapper}>
                <div>
                    <input className={style.input}
                           type='text'
                           placeholder='Введите имя'
                           value={order.name}
                           onChange={e => setOrder({...order, name: e.target.value})}
                    /><br/>

                    <input className={style.input}
                           type='text'
                           placeholder='Введите почту'
                           value={order.email}
                           onChange={e => setOrder({...order, email: e.target.value})}
                    /><br/>

                    <input className={style.input}
                           type='text'
                           placeholder='Введите телефон'
                           value={order.phone}
                           onChange={e => setOrder({...order, phone: e.target.value})}
                    />
                </div>
                <div className={style.Btn_form}>
                    <button className={style.button_input} onClick={onClickBtn}>Отправить комментарий</button>
                </div>
            </form>
        </div>
    );
};

export default FormApplication;