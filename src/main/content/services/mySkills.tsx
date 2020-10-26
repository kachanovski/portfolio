import React from "react";
import style from "./mySkills.module.scss"
import Progress from "../../../component/progressBar/progress";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const MySkills = () => {
    return (
        <div id={'mySkills'}>
            <Fade right>
                <div className={style.mySkills}>
                    <h1>MY SKILLS</h1>
                    <h3>What I Know</h3>

                    <div className={style.progressBar}>
                        <div className={style.leftBar}>
                            <Progress value={60} title={"HTML"}/>
                            <Progress value={50} title={"CSS"}/>
                            <Progress value={60} title={"React"}/>
                        </div>
                        <div className={style.rightBar}>
                            <Progress value={40} title={"Redux"}/>
                            <Progress value={40} title={"Rest"}/>
                            <Progress value={20} title={"GraphQL"}/>
                        </div>

                    </div>
                </div>
            </Fade>
        </div>

    )
}

export default MySkills