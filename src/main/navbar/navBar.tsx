import React, {useState} from "react";
import style from "./navBar.module.scss"
import avatarPhoto from './../../accets/images/avatar_photo.png'
import {Link} from "react-scroll";
import ContactsIcons from "../content/ContactsIcons/contactsIcons";
import BurgerMenu from "../../component/burgerMenu/burgerMenu";

const NavBar = () => {

    const [menu, setMenu] = useState(false)

    const pages = [
        {id: 'home', title: 'Home'},
        {id: 'aboutMe', title: 'About Me'},
        {id: 'mySkills', title: 'My Skills'},
        {id: 'portfolio', title: 'Portfolio'},
        {id: 'contacts', title: 'Contacts'},
    ]

    const showMenu = () => {
        setMenu(true)
    }
    const hideMenu = () => {
        setMenu(false)
    }


    return (
        <nav className={style.navBar}>
            <a className={style.imgLink} href={'http://localhost:3000/'}>
                <div className={style.photo}>
                    <img alt={'Ava'} src={avatarPhoto}/>
                    <h3>Kachanovski</h3>
                </div>
            </a>
            <div className={style.links}>
                {pages.map(links => {
                    return (
                        <Link
                            key={links.id}
                            className={style.link}
                            activeClass={style.activeLink}
                            to={links.id}
                            spy={true}
                            smooth={true}
                            isDynamic={false}
                            duration={500}
                        >{links.title}</Link>
                    )
                })}
            </div>

            <ContactsIcons/>
            <BurgerMenu menu={menu} hideMenu={hideMenu} showMenu={showMenu}/>

            {menu
                ? <div className={style.burgerMenu}>
                    {pages.map(links => {
                        return (
                            <Link
                                onClick={hideMenu}
                                key={links.id}
                                className={style.link_mobile}
                                activeClass={style.activeLink}
                                to={links.id}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >{links.title}</Link>
                        )
                    })}
                </div>
                : null
            }
        </nav>
    )
}

export default NavBar