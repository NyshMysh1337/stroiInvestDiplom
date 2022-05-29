import React from 'react';
import style from './EtapProiz.module.css'

const EtapProiz = ({text, ...props}) => {
    return (
        <div className={style.body}>
            <p className={style.id}>{text.id}</p>
            <h1 className={style.name}>{text.name}</h1>
            <p className={style.body_etap}>{text.body}</p>
        </div>
    );
};

export default EtapProiz;