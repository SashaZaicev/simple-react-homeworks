import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import s from "./Greeting.module.css"

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('')
        setName(e.currentTarget.value);
        // need to fix
    };
    const addUser = () => {
        if (name !== '') {
            addUserCallback(name)
            alert(name);
            setName("")
        } else return setError('InvalidName')
        // need to fix
    };

    const totalUsers = users.length; // need to fix
    let listUsers = users.map((t: UserType) => <div>{t.name}</div>)
    return (<div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
            {listUsers}
        </div>

    );
}

export default GreetingContainer;
