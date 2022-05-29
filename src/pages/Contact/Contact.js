import React from 'react';
import Footer from "../../component/Footer/Footer";
import style from './Contact.module.css'
import Map from "../../component/Map/Map";

const Contact = () => {
    return (
        <div className={style.map_body}>

            <div className={style.body_about}>
                <div className={style.info_office}>
                    <h1>Офис в Йошкар-Оле</h1>
                    <p>г.Йошкар-Ола, ул.Пушкина д.27</p>
                </div>

                <div className={style.info_office}>
                    <h1>Телефон и email</h1>
                    <p>8 800 250-51-41 (беспл.по РФ)<br/>
                        stroiInvest@mail.ru<br/>
                        Пн-Пт 10.00-18.00 без обеда</p>
                </div>

                <div className={style.info_office}>
                    <h1>Офис в Чебоксарах</h1>
                    <p>г.Чебоксары, п-д Машиностроителей 1,<br/>
                        офис 604<br/>
                        8 (8352) 46-77-11, +7 902 017-77-11</p>
                </div>
            </div>
        <div className={style.map}>
            <Map/>
        </div>

            <Footer/>
        </div>
    );
};

export default Contact;