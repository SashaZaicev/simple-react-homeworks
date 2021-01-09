import React from "react";
import style from '../h1/AlternativeMessage.module.css'

type AlternativeMessagePropsType = { // need to fix any
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <>
            <div className={style.alternativeMessage}>
                <div></div>
                <div className={style.alternativeMessageBlock}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.mini_message}>{props.message}</p>
                    <p className={style.time}>{props.time}</p>
                </div>
                <div className={style.alternativeImageLogo}>
                    <img src={props.avatar}/>
                </div>
            </div>
        </>
    );
}

export default AlternativeMessage;
