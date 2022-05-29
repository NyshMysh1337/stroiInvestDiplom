import React from 'react';
import style from './SpisokHome.module.css'
import {useNavigate} from "react-router-dom";

const SpisokHome = ({home, ...props}) => {

    const router = useNavigate()

    const pushNavigate = () => {
        router(`/home/${home.id}`)
    }

    return (
        <div className={style.body_glav}>
            <div>
                <img className={style.glav_img} src={home.img}/>
                <h2 className={style.name_home}>{home.name}</h2>
                <div>
                    <p className={style.info_home}>Материалы: {home.material}</p>
                    <p className={style.info_home}>Площадь: {home.S}m<sup><small>2</small></sup></p>
                    <button onClick={pushNavigate} className={style.podr_home}>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default SpisokHome;