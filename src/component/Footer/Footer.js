import React from 'react';
import logo from './../../img/logoStroiInv.png'
import style from './Footer.module.css'
import telegram from './../../img/telegram.png'
import vk from  './../../img/vk.png'
import mail from './../../img/email.png'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_wrapper}>
                <div>
                    <img className={style.logo_footer} src={logo}/>
                        <div>
                            <Link to={''}><img className={style.instagram} src={telegram}/></Link>
                            <Link to={''}><img className={style.instagram} src={vk}/></Link>
                            <Link to={''}><img className={style.instagram} src={mail}/></Link>
                        </div>
                    <div style={{marginTop: 30}}>
                        <p className={style.footer_info}>ООО СтройInvest, 2022</p>
                        <p className={style.footer_info}>Политика конфинденциальности</p>
                    </div>
                </div>
                <div style={{marginLeft: 100}}>
                    <table className={style.table_footer}>
                        <tr className={style.tabel_colomne_footer}>
                            <th className={style.pole_footer}>О нас</th>
                        </tr>
                        <tr className={style.tabel_colomne_footer}>

                            <td className={style.pole_footer}>
                                <Link to={'/contact'}>Контакты</Link>
                            </td>

                        </tr>
                        <tr className={style.tabel_colomne_footer}>
                            <td className={style.pole_footer}>
                               <Link className={style.link_page} to={'/comment'}>Отзывы</Link>
                            </td>
                            <td className={style.pole_footer}></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    );
};

export default Footer;