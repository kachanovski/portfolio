import React from "react";
import style from "./navBar.module.scss"
import avatarPhoto from './../../accets/images/avatar_photo.png'
import iconInstagram from '../../accets/icons/instagram.png'
import iconGithub from '../../accets/icons/github.png'
import iconLinlIn from '../../accets/icons/linkedin.png'
import iconGoogle from '../../accets/icons/google-plus .png'
import iconTelegram from '../../accets/icons/telegram.png'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <div className={style.photo}>
                <img alt={'Ava'} src={avatarPhoto}/>
                <h3>Aliaksandr</h3>
                <h3> Kachanovski</h3>
            </div>

            <div className={style.links}>
                <NavLink className={style.link} to={'/home'}>Home</NavLink>
                <NavLink className={style.link} to={'/aboutMe'}>About me</NavLink>
                <NavLink className={style.link} to={'/mySkills'}>What I do</NavLink>
                <NavLink className={style.link} to={'/portfolio'}>Portfolio</NavLink>
                <NavLink className={style.link} to={'/contacts'}>Contacts</NavLink>
            </div>

            <div className={style.contacts}>
                <img alt={'G'} src={iconGoogle}/>
                <img alt={'Inst'} src={iconInstagram}/>
                <img alt={'GH'} src={iconGithub}/>
                <img alt={'Link'} src={iconLinlIn}/>
                <img alt={'Telegram'} src={iconTelegram}/>
            </div>
        </nav>
    )
}

export default NavBar