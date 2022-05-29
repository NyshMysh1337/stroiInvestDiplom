import React from 'react';
import style from "../../pages/About/About.module.css";

const Map = () => {
    return (
        <div className={style.map}><a
            href="https://yandex.ru/maps/41/yoshkar-ola/?utm_medium=mapframe&utm_source=maps"
            style={{color: '#eee',fontSize:'12px',position:'absolute',top:0}}>Йошкар‑Ола</a><a
            href="https://yandex.ru/maps/41/yoshkar-ola/house/ulitsa_pushkina_27/YE4Yfg9mTEcOQFtsfXpydXxiZQ==/?ll=47.888091%2C56.633743&utm_medium=mapframe&utm_source=maps&z=17.35"
            style={{color:'#eee', fontSize: '12px', position:'absolute',top:'14px'}}>Улица Пушкина, 27 — Яндекс Карты</a>
            <iframe src="https://yandex.ru/map-widget/v1/-/CCUJ4VXeCD" width="560" height="400" frameBorder="1"
                    allowFullScreen="true" style={{position:'relative'}}></iframe>
        </div>
    );
};

export default Map;