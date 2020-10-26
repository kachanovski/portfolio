import React from "react";
import style from "./portfolio.module.scss"
import neroCardProject from '../../../accets/images/neroCardProject.jpg'
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
                                todolist
                            </div>
                            <div className={style.box2}>social network</div>
                            <div className={style.box3}>
                                <img src={neroCardProject}/>
                            </div>
                            <div className={style.box4}>snake game</div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>

    )
}

export default Portfolio