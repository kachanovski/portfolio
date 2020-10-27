import React from "react";
import style from "./portfolio.module.scss"
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    return (
        <div id={'portfolio'}>
            <Fade left>
                <div className={style.portfolio}>
                    <div className={style.portfolio_wrap}>
                        <div>
                            <h1>PORTFOLIO</h1>
                            <h3>My Work</h3>
                        </div>

                        <div className={style.sortMenu}>
                            <button className={style.sortButton}>All</button>
                            <button className={style.sortButton}>Design</button>
                            <button className={style.sortButton}>JS</button>
                        </div>
                        <div className={style.popUpGallery}>
                            <div className={style.box1}>
                                <a href={'https://github.com/kachanovski/counter-ts-redux'}>counter</a>
                            </div>
                            <div className={style.box2}>
                                <a href={'https://github.com/kachanovski/it-incubator-social-newtwork-ts'}>social network</a>
                            </div>
                            <div className={style.box3}>
                                <a href={'https://github.com/kachanovski/neko-card-react-ts-project'}>neroCard</a>
                            </div>
                            <div className={style.box4}>
                                <a href={'https://github.com/kachanovski/weather-project'}>Weather app</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>

    )
}

export default Portfolio