import React from 'react';
import style from './GetComment.module.css'

const GetComment = ({comment, index}) => {
    return (
        <div className={style.body}>
            <div className={style.comment}>
               <h2 className={style.id}>{index + 1}. {comment.name}</h2>
                <div className={style.body_comment}>
                    <p className={style.body_body}>{comment.body}</p>
                </div>
            </div>

        </div>
    );
};

export default GetComment;