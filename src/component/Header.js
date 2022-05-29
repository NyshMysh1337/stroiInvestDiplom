import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header_wrapper'>
            <div className='header_logo'>
                <Link className='link_header' to={'/contact'}>Контакты</Link>
                <div>
                    <Link to={'/home'} className='logo'>СтройInvest</Link>
                </div>
                <Link className='link_header' to={'/comment'}>Отзывы</Link>
            </div>
        </div>
    );
};

export default Header;