import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import InfoHome from "../../API/InfoHome";
import {useFething} from "../../hooks/useFetchings";
import style from './Podrobnee.module.css'
import Tarif from "../../component/Tarif";
import MyModal from "../../component/UI/MyModal/MyModal";
import FormApplication from "../../component/Form/Form";
import Footer from "../../component/Footer/Footer";


const Podrobnee = (props) => {

    const params = useParams()
    const [home, setHome] = useState(1)
    const [modal, setModal] = useState(false)
    const [fetchHomeById,isLoading, setIsLoading] = useFething(async () => {
        const response = await InfoHome.getHome(params.id)
        setHome(response.data)
    })

    useEffect(() => {
        fetchHomeById()
    }, [])

    return (
        <div>
        <div className={style.body_wrapper}>
            <div className={style.body_zag}>
                <h1>{home.name}</h1>
            </div>
            <div className={style.podZag}>
                <h3>{home.opisanie}</h3>
            </div>
            <div className={style.body}>
                <div>
                    <div className={style.body_img_left}>
                        <img src={"https://thumb.tildacdn.com/tild3230-6266-4262-b861-623533393238/-/cover/65x65/center/center/-/format/webp/tape-measure.png"}/>
                        <h1 style={{marginLeft: 30}}>Площадь {home.S}км.м</h1>
                    </div>
                    <div className={style.body_img_left}>
                        <img src={"https://thumb.tildacdn.com/tild3737-3531-4234-b533-313336376462/-/cover/65x65/center/center/-/format/webp/calendar.png"}/>
                        <h1 style={{marginLeft: 30}}>Срок строительства 2-3 дня</h1>
                    </div>
                </div>
                <div>
                    <img className={style.home_img} src={home.planImg} alt=""/>
                </div>
            </div>
            <div>
                <div className={style.body_text}>
                    <h3>Во всех комплектациях:</h3>
                    <p>
                        Каркасный дом с наружной отделкой стен имитацией бруса 16мм,
                        внутренней отделкой стен и потолка евровагонкой. Пол в доме
                        шпунтованная половая рейка толщиной 25мм, на террасе обрезная
                        строганная доска толщиной 40мм. Крыша двускатная, высота конька
                        1600 мм, подшивы 200мм. Двери 2шт. Окна белые пластиковые с
                        поворотно-откидной створкой (2 стекла), 3шт размерами 800х1000мм и
                        1 шт 600х600мм. Бесплатная доставка в радиусе 10км от города.
                    </p>
                </div>
            </div>
            <div className={style.tarif}>
             <Tarif home={home}/>
            </div>
            <div className={style.btn_visible}>
                <button className={style.btn_active} onClick={() => setModal(true)}>Хочу этот дом</button>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <div className={style.modal_active}>
                    <h2 className={style.form_head}>Напишите нам и мы свяжемся с вами!</h2>
                </div>
                <div className={style.modal_active_form}><FormApplication visible={modal} setVisible={setModal}/></div>
            </MyModal>
        </div>
            <Footer/>
        </div>
    );
};

export default Podrobnee;