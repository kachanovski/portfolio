import React from "react";
import style from './progress.module.scss'

type ProgressPropsType = {
    value: number
    title: string
}

const Progress = (props: ProgressPropsType) => {
    return (
        <div className={style.progress}>
            <progress max={100} value={props.value}/>
            <div className={style.progressValue}>
                <span>{props.title}</span>
            </div>
            <div className={style.progressBg}>
                <div className={style.progressBar}/>
            </div>
        </div>
    )
}

export default Progress


