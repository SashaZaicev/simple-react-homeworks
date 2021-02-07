import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import s from './Navbar.module.css'

export type SidebarDataPropsType =
    {
        title: string,
        path: string,
        icon: JSX.Element,
        cName: string,
    }


const SidebarData: SidebarDataPropsType[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: s.nav_text,
    },
    {
        title: 'Junior',
        path: '/junior',
        icon: <IoIcons.IoIosPaper/>,
        cName: s.nav_text
    },
    {
        title: 'Junior-plus',
        path: '/junior-plus',
        icon: <FaIcons.FaCartPlus/>,
        cName: s.nav_text
    }
]

export default SidebarData;