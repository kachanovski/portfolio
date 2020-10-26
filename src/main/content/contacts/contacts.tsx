import React from "react";
import style from "./contacts.module.scss"
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Contacts = () => {
    return (
        <div id={'contacts'}>
            <Fade right>
                <div className={style.contacts}>
                    <div>
                        <h1>CONTACTS</h1>
                        <h3>Get in Touch</h3>
                    </div>

                    <div className={style.contactsContainer}>
                        <div className={style.contactForm}>
                            <input placeholder={"Name"}/>
                            <input placeholder={"E-mail"}/>
                            <br/>
                            <textarea placeholder={"Tell us more about your need ...."}/>
                            <br/>
                            <button>Send Message</button>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>

    )
}

export default Contacts