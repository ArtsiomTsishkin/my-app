import React from "react";
import bar from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/users.jpg";
import styles from "../Users/users.module.css";

const NavBar = () => {

    return <nav className={bar.nav}>
        <div className={bar.item}>
            <NavLink activeClassName={bar.activeLinc} to='/profile'>Profile</NavLink>
        </div>
        <div className={bar.item}>
            <NavLink activeClassName={bar.activeLinc} to='/dialogs'>Messages</NavLink>
        </div>
        <div className={bar.item}>
            <NavLink activeClassName={bar.activeLinc} to='/users'>Users</NavLink>
        </div>
        <div className={bar.item}>
            <NavLink activeClassName={bar.activeLinc} to='/news'>News</NavLink>
        </div>
        <div className={bar.item}>
            <NavLink activeClassName={bar.activeLinc} to='/music'>Music</NavLink>
        </div>
        <div className={bar.item}>
            <NavLink activeClassName={bar.activeLinc} to='/setting'>Settings</NavLink>
        </div>
        <div className={bar.item}>
            <NavLink activeClassName={bar.activeLinc_1} to='/friends'>Friends</NavLink>
            <tr >
                <td>
                    <div className={bar.navbar}>
                        <img src='https://img.icons8.com/material/4ac144/256/user-male.png' width='100px'/>
                        Artem
                    </div>
                </td>
                <td>
                    <div className={bar.navbar}>
                        <img src='https://img.icons8.com/material/4ac144/256/twitter.png' width='100px'/>
                        Andrey
                    </div>
                </td>
                <div className={bar.navbar}>
                    <td><img src='https://ru.seaicons.com/wp-content/uploads/2015/08/Dentist-icon.png' width='100px'/></td>
                    <span > Yliyana </span>
                </div>
            </tr>
        </div>
    </nav>
}
export default NavBar;