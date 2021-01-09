import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: "https://image.freepik.com/free-vector/rabbit-gaming-mascot-e-sports-logo_74154-31.jpg",
    name: "Alexander",
    message: "Hello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmerHello, I'm React programmer",
    time: "22:00",
};


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}/>
            <hr/>
        </div>
    );
}

export default HW1;
