import React, {useState} from 'react';
import Footer from "../../component/Footer/Footer";
import style from './ProjectHome.module.css'

const ProjectHome = () => {

    const [L, setL] = useState(null) //длина
    const [L1, setL1] = useState(null) //ширина
    const [h, setH] = useState(null) // высота

    const [itog, setItog] = useState(0)
    const [S, setS] = useState(0)


    const rascot = () => {
        setS((+L * +L1) * +h)
        setItog(S * 2000)
    }

    return (
        <div>
            <h1 className={style.project_zag}>Расчет стоимости дома</h1>
            <div>
                <div>
                    <h1>Исходные данные</h1>
                    <input value={L} placeholder={'Введите длину'} onChange={(e) => setL(e.target.value)}/>m
                    <input value={L1} placeholder={'Введите ширину'} onChange={(e) => setL1(e.target.value)}/>m
                    <input value={h} placeholder={'Высота высоту'} onChange={(e) => setH(e.target.value)}/>m
                </div>

                <div>
                    <h2>Площадь:{S}</h2>
                    <h2>Итого:{itog}</h2>
                    <button className={style.project_Btn} onClick={rascot}>Расчитать стоимость</button>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default ProjectHome;