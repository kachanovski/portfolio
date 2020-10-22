import React from 'react'
import style from "./homePage.module.scss"
import ReactTypingEffect from "react-typing-effect";
import {NavLink} from 'react-router-dom';

const HomePage = () => {
    return (
        <nav className={style.homePage}>
            <h3>Welcome</h3>
            <div className={style.typingTextEffect}>
                <ReactTypingEffect text={`I'm frontend developer`}/>
            </div>
            <h3>bases in Minsk, Belarus</h3>
            <NavLink to={'/contacts'}>
                <button>
                    Hire Me
                </button>
            </NavLink>
        </nav>
    )
}

export default HomePage
