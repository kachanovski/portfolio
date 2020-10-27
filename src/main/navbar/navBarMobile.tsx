import React, {useState} from "react";
import style from "./navBarMobile.module.scss"
import {Link} from "react-scroll";
import ContactsIcons from "../content/ContactsIcons/contactsIcons";
import BurgerMenu from "../../component/burgerMenu/burgerMenu";

const NavBarMobile = () => {

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
        <div className={style.navBarMobile}>
            <a className={style.imgLink} href={'http://localhost:3000/'}>
                    <h3>Kachanovski</h3>
            </a>

            <ContactsIcons/>
            <BurgerMenu menu={menu} hideMenu={hideMenu} showMenu={showMenu}/>

            {menu
                ? <div className={style.burgerMenuContainer}>
                    <div className={style.burgerMenu} >
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
                </div>
                : null
            }
        </div>
    )
}

export default NavBarMobile