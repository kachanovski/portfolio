import React from 'react'
import style from "./homePage.module.scss"
import ReactTypingEffect from "react-typing-effect";
import {Link} from "react-scroll";

const HomePage = () => {
    return (
        <nav id={'home'} className={style.homePage}>
            <h3>Welcome</h3>
            <div className={style.typingTextEffect}>
                <ReactTypingEffect text={`I'm frontend developer`}/>
            </div>
            <h3>bases in Minsk, Belarus</h3>

            <Link
                activeClass="active"
                to='contacts'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <button>
                    Hire Me
                </button>
            </Link>
        </nav>
    )
}

export default HomePage
