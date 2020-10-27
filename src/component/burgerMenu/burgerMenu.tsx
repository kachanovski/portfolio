import React from "react";
import style from "./burgerMenu.module.scss"

type BurgerMenuPropsType = {
    menu: boolean
    hideMenu: () => void
    showMenu: () => void

}

const BurgerMenu = (props: BurgerMenuPropsType) => {

    return (
        <div>
            <div className={style.burger_menu}>
                {props.menu
                    ? <div onClick={props.hideMenu} className={style.burger_menu}>
                        <span className={style.close_burger_line1}/>
                        <span className={style.close_burger_line2}/>
                    </div>
                    : <div onClick={props.showMenu} className={style.burger_menu}>
                        <span className={style.close_burger_line}/>
                        <span className={style.close_burger_line}/>
                        <span className={style.close_burger_line}/>
                    </div>
                }
            </div>
        </div>

    )
}

export default BurgerMenu