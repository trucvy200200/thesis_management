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

const management_navs = [
    {
        id: "/register-thesis",
        value: "Đăng ký đề tài",
    },
    {
        id: "/manage-thesis",
        value: "Quản lý đề tài",
    },
    {
        id: "/approve-thesis",
        value: "Duyệt đề tài",
    },
    {
        id: "/assigned-lecturer",
        value: "Phân GVPB",
    }
]

const admin_navs = [
    {
        id: "/manage-user",
        value: "Tài khoản",
    },
    {
        id: "/manage-thesis",
        value: "Đề tài",
    },
    {
        id: "/manage-term",
        value: "Niên khóa",
    },
    {
        id: "/manage-major",
        value: "Chuyên ngành",
    },
    {
        id: "/manage-register",
        value: "Đợt đăng ký đề tài",
    }
]
const lenturer_navs = [
    {
        id: "/register-thesis",
        value: "Đăng ký đề tài",
    },
    {
        id: "/manage-thesis",
        value: "Quản lý đề tài",
    },
    {
        id: "/assigned-thesis",
        value: "Đề tài được phân công",
    }
]
const Navbar = ({ role }) => {
    return (
        <div id="ftc-nav">
            <ul className="navbar-navb  display">
                {!role && navs.map((nav, index) => {
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
                {role === 2 && lenturer_navs.map((nav, index) => {
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
                {role === 3 && management_navs.map((nav, index) => {
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
                {role === 4 && admin_navs.map((nav, index) => {
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