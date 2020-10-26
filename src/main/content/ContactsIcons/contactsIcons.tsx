import React from "react";
import style from "./contactsIcons.module.scss"
import iconInstagram from '../../../accets/icons/instagram.png'
import iconGithub from '../../../accets/icons/github.png'
import iconLinkIn from '../../../accets/icons/linkedin.png'
import iconTelegram from '../../../accets/icons/telegram.png'

const ContactsIcons = () => {
    return (
            <div className={style.contacts}>
                <a className={style.icons} href={'https://www.instagram.com/_kachanovski/'}> <img alt={'Inst'} src={iconInstagram}/></a>
                <a href={'https://github.com/kachanovski'}> <img alt={'GH'} src={iconGithub}/></a>
                <a href={'https://github.com/kachanovski'}> <img alt={'Link'} src={iconLinkIn}/></a>
                <a href={'https://t.me/shura_13'}><img alt={'Telegram'} src={iconTelegram}/></a>
            </div>
    )
}

export default ContactsIcons