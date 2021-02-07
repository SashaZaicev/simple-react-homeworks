import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import Navbar from "./pages/Menu/Navbar";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>
                <Navbar/>
            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
