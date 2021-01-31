import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass; // need to fix with (?:)
    let onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    }

    return (
        <div>
            <input value={name} onKeyPress={onKeyPress} onChange={setNameCallback} className={inputClass}/>
            <span>  {error}  </span>
            <button style={{color: '#d2b704', background: 'black'}} onClick={addUser}>add</button>
            <span>  {totalUsers}  </span>
        </div>
    );
}

export default Greeting;
