import React from "react";
import style from '../h1/Message.module.css'

type MessagePropsType = { // need to fix any
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <>
            <div className={style.message}>
                <div className={style.image_logo}>
                    <img src={props.avatar}/>
                </div>
                <div className={style.message_block}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.mini_message}>{props.message}</p>
                    <p className={style.time}>{props.time}</p>
                </div>
            </div>
        </>
    );
}

export default Message;
