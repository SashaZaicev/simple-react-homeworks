import React, {useState} from "react";
import {Link} from "react-router-dom";
import s from "./Navbar.module.css"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from "./SidebarData";
import {IconContext} from "react-icons";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className={s.navbar}>
                    <Link to="#" className={s.menu_bars}>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? `${s.nav_menu} ${s.active}` : `${s.nav_menu}`}>
                    <ul className={s.nav_menu_items} onClick={showSidebar}>
                        <li className={s.navbar_toggle}>
                            <Link to='#' className={s.menu_bars} >
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar