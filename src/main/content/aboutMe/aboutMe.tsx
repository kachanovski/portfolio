import React from "react";
import style from "./aboutMe.module.scss"

const AboutMe = () => {
    return (
        <div className={style.aboutMe}>
            <div className={style.aboutMe_wrap}>
                <div>
                    <h1>ABOUT ME</h1>
                    <h3>Know Me More</h3>
                </div>

                <div className={style.aboutMeContainer}>
                    <div className={style.aboutMeText}>
                        <h2>I'm <span>Aliaksander Kachnovski</span> , a Web Developer</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci illum inventore laboriosam
                        necessitatibus nulla reiciendis sit. Assumenda atque culpa debitis delectus, ea, earum ipsa, labore
                        laborum magnam recusandae tempore voluptates.
                    </div>
                    <div className={style.address}>
                        <div className={style.addressList}><b>Name:</b> Aliaksander Kachnovski</div>
                        <div className={style.addressList}><b>Email:</b> kachanovski03@gmail.com</div>
                        <div className={style.addressList}><b>Age:</b> 25</div>
                        <div className={style.addressList}><b>From:</b> Minsk, Belarus</div>
                    </div>
                </div>

                <div className={style.brands}>
                    <div className={style.brandsBox}>
                        1 Years Experiance
                    </div>
                    <div className={style.brandsBox}>
                        250+ Happy Clients
                    </div>
                    <div className={style.brandsBox}>
                        650+
                        Projects Done
                    </div>
                    <div className={style.brandsBox}>
                        38
                        Get Awards
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe