import React from "react";
import logo from './cat_standing_animated.gif'
import {Redirect, Link} from "react-router-dom";
import {PATH} from "../Routes";

function Error404() {
    // grid-template-columns: 45% 54%;
    // grid-template-rows: 20% 20% 20% 20%;
    return (
        <div style={{
            "display": "grid",
            "gridTemplateColumns": "40% 40% 20%",
            "gridTemplateRows": "20% 20% 20% 20%",
        }}>
            <img style={{
                "width": "32%",
                "gridColumn": "1/5",
                "gridRow": "1/2",
            }} src={logo} alt={"404 error cat"}/>
            <h1 style={{
                "marginBottom": "0.5rem",
                "color": "#e32",
                "fontSize": "4rem",
                "lineHeight": "4.15rem",
                "gridColumn": "2/5",
                "gridRow": "1/2",
            }}>Oops.</h1>
            <h2 style={{
                "gridArea": "2 / 2 / 2 / 5",
                "color": "#e32",
                "marginTop": 0,
            }}>We can't find the page you're looking for.</h2>
            <p style={{
                "gridArea": "3 / 2 / 2 / 3",
                "margin": "38px 0 0 0",
            }}>It may have expired, or there could be a typo. Maybe you can find what you need from our homepage.
            </p>
            {/*<div>404</div>*/}
            {/*<div>Page not found!</div>*/}
            <button onClick={() => <Redirect to={PATH.PRE_JUNIOR}/>} style={{
                "gridArea": "3 / 2 / 4 / 3",
                "fontSize": "300%",
                "width": "85%",
                "height": "62%",
            }}><Link style={{
                "textDecoration": "none",
                "color": "black",
            }} to="/">—ฅ/ᐠ.̫ .ᐟ\ฅ—</Link>
            </button>
        </div>
    );
}

export default Error404;
