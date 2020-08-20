import React from 'react';
import head from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <heder className={head.header}>
        <img src='http://bm.img.com.ua/nxs/img/prikol/images/large/0/5/214650_485070.jpg'/>
        <div className={head.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </heder>
}
export default Header;