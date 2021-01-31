import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import AlternativeGreeting from "./AlternativeGreeting";
import s from './Greeting.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {
            _id: v1(),
            name: name,
        };
        setUsers([...users, newUser]); // need to fix
    }
    const clearAll = () => {
        setUsers([])
        alert('It\'s clear!!!')
    }
    return (
        <div className={s.hwMain}>
            <hr/>
            <span style={{color: 'red'}}>homeworks 3</span>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeGreeting clearAll={clearAll}/>
            <hr/>
        </div>
    );
}

export default HW3;
