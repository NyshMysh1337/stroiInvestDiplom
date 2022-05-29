import React, {useEffect, useState} from 'react';
import SpisokHome from "../component/SpisokHome/SpisokHome";
import EtapProiz from "../component/EtapProiz/EtapProiz";
import InfoONas from "../component/InfoONas/InfoONas";
import {useFething} from "../hooks/useFetchings";
import InfoHome from "../API/InfoHome";
import Footer from "../component/Footer/Footer";

const Glavnai = () => {

    const [home, setHome] = useState([])
    const [fetchHomeAllById,isLoading, setIsLoading] = useFething(async () => {
        const response = await InfoHome.getAllHome()
        setHome(response.data)
    })

    useEffect(() => {
        fetchHomeAllById()
    }, [])

    const [sotrud, setSotrud] = useState([
        {id: 1, name: 'Оформление заявки', body: `Позвоните нам по номеру +7 (962) 677-55-55 или
                                                    напишите на электронную почту
                                                    stroyinvest@уапдех.ru. Сообщите детали вашего,
                                                    заказа, опишите в общих чертах ваши
                                                    ‘потребности.`},
        {id: 2, name: 'Проектирование', body: `Разрабатываем для вас индивидуальный
                                                проект, готовим полный комплект
                                                документов для БТИ, техническое задание
                                                для строителей, рассчитываем расход
                                                строительных материалов.`},
        {id: 3, name: 'Заключение договора', body: `Договор подготавливают и подписывают
                                                      в договорном отделе. Это можно сделать
                                                      после консультации менеджера, который
                                                      сделает точный расчет стоимости дома и
                                                      проводит вас в договорный отдел`},
        {id: 4, name: 'Сдача объекта', body: `Окончанием строительства считается
                                                тот момент, когда все работы, прописанные
                                                в договоре, выполнены. По окончании
                                                работ владелец осматривает дом
                                                и подписывает акт выполненных работ`}
    ])

    const [info, setInfo] = useState([
        {year: 15, body: 'строительных бригад'},
        {year: 16, body: 'лет опыта в строительсиве'},
        {year: 100, body: 'лет - средний срок службы дома'},
        {year: 612, body: 'построенных домов'},
    ])

    return (
        <div>
            <div className='zag_body'>
                <h2 className='zag_body_wrapper'>Наши проекты - это оптимальная комплектация,<br/> продуманная планировка и фиксированная стоимость</h2>
            </div>
            <div className='awdawd'>
                <div className='body_glav_wrapper'>
                        {home.map(el =>
                          <SpisokHome key={el.id} home={el}/>
                        )}
                </div>
            </div>
            <div>
                <div className='zag_body'>
                    <h1>Этапы работы с нами</h1>
                </div>
                <div className='pod_zag_body'>
                    <p className='pod_zag'>
                        Мы стремимся обеспечить максимальный комфортные<br/>
                        для заказчика условия сотрудничества
                    </p>
                </div>
                <div className='etap_proiz'>
                    {sotrud.map(el =>
                        <EtapProiz text={el}/>
                    )}
                </div>
            </div>
            <div className='o_nas'>
                <h1 className='zag_body'>Немного фактов о нас</h1>
                <div className='pod_zag_body'>
                    <p className='pod_zag'>
                        Компания "СтройInvest" строит и продает дома с 2005 года.<br/>
                        Строительство домов - наше основное направление
                    </p>

                </div>
                <div className='o_nas_info'>
                    {info.map(el =>
                        <InfoONas key={el.year} info={el}/>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Glavnai;