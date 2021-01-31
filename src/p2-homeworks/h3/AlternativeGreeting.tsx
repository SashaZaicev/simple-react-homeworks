import React from "react";
import s from './Greeting.module.css'

type ClearAllPropsType = {
    clearAll: () => void
}

const AlternativeGreeting:React.FC<ClearAllPropsType> = ({clearAll}) => {
    return (
        <div className={s.body}>
            <button className={s.pressed_button} onClick={clearAll}>Clear all</button>
        </div>
    );
}

export default AlternativeGreeting;
