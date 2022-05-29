import React from 'react';
import style from './InfoONas.module.css'

const InfoONas = ({info, ...props}) => {
    return (
        <div>
            <h1 className={style.year}>{info.year}</h1>
            <hr/>
            <p className={style.body}>{info.body}</p>
        </div>
    );
};

export default InfoONas;