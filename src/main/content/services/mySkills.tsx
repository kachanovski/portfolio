import React from "react";
import style from "./mySkills.module.scss"
import Progress from "../../../component/progressBar/progress";

const MySkills = () => {
    return (
        <div className={style.mySkills}>
            <h1>MY SKILLS</h1>
            <h3>What I Know</h3>

            <div className={style.progressBar}>
                <div className={style.leftBar}>
                    <Progress value={40} title={"React"}/>
                    <Progress value={40} title={"React"}/>
                    <Progress value={80} title={"React"}/>
                </div>
                <div className={style.rightBar}>
                    <Progress value={60} title={"React"}/>
                    <Progress value={60} title={"React"}/>
                    <Progress value={20} title={"React"}/>
                </div>

            </div>
        </div>
    )
}

export default MySkills