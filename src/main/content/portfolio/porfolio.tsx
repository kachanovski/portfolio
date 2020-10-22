import React from "react";
import style from "./portfolio.module.scss"

const Portfolio = () => {
    return (
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
                    <div className={style.box3}>neko-card</div>
                    <div className={style.box4}>snake game</div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio