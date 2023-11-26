import { useState, useRef } from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const navs = [
    {
        id: "/annoucement",
        value: "Thông báo",

    },
    {
        id: "/guide",
        value: "Hướng dẫn",
    },
    {
        id: "/preference",
        value: "Đề tài tham khảo",
    },
    {
        id: "/lecturer-list",
        value: "Thông tin liên hệ",
    },
]

const student_navs = [
    {
        id: "/register-thesis",
        value: "Đăng ký đề tài",
    },
    {
        id: "/manage-thesis",
        value: "Quản lý đề tài",

    }
]

const lecturer_navs = [
    {
        id: "/register-thesis",
        value: "Đăng ký đề tài",
    },
    {
        id: "/manage-thesis",
        value: "Quản lý đề tài",

    }
]
const Navbar = ({ role }) => {
    return (
        <div id="ftc-nav">
            <ul className="navbar-navb  display">
                {role === 0 && navs.map((nav, index) => {
                    return (
                        <>
                            {nav.submenu ? (
                                <li className="navb-item" key={index} style={{ cursor: "pointer" }}>
                                    <a className="navb-link" >
                                        <span>{nav.value} <ArrowDropDownIcon /></span>
                                    </a>
                                    <ul className="dropdown"
                                    >
                                        {nav.submenu.map((submenu, index) => (
                                            <li key={index} className="dropdown-item">
                                                <a href={submenu.url}>{submenu.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li >
                            ) : (
                                <li className="navb-item" key={index} >
                                    <a href={nav.id} className="navb-link" >
                                        <span>{nav.value}</span>
                                    </a>
                                </li>
                            )
                            }
                        </>
                    );
                })}
                {role === 1 && student_navs.map((nav, index) => {
                    return (
                        <>
                            {nav.submenu ? (
                                <li className="navb-item" key={index} style={{ cursor: "pointer" }}>
                                    <a className="navb-link" >
                                        <span>{nav.value} <ArrowDropDownIcon /></span>
                                    </a>
                                    <ul className="dropdown"
                                    >
                                        {nav.submenu.map((submenu, index) => (
                                            <li key={index} className="dropdown-item">
                                                <a href={submenu.url}>{submenu.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li >
                            ) : (
                                <li className="navb-item" key={index} >
                                    <a href={nav.id} className="navb-link" >
                                        <span>{nav.value}</span>
                                    </a>
                                </li>
                            )
                            }
                        </>
                    );
                })}
                {role === 2 && lecturer_navs.map((nav, index) => {
                    return (
                        <>
                            {nav.submenu ? (
                                <li className="navb-item" key={index} style={{ cursor: "pointer" }}>
                                    <a className="navb-link" >
                                        <span>{nav.value} <ArrowDropDownIcon /></span>
                                    </a>
                                    <ul className="dropdown"
                                    >
                                        {nav.submenu.map((submenu, index) => (
                                            <li key={index} className="dropdown-item">
                                                <a href={submenu.url}>{submenu.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li >
                            ) : (
                                <li className="navb-item" key={index} >
                                    <a href={nav.id} className="navb-link" >
                                        <span>{nav.value}</span>
                                    </a>
                                </li>
                            )
                            }
                        </>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;