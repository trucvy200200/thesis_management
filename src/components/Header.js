import React, { useEffect, useState, memo } from "react";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
const Header = ({ role }) => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleIsSticky = () => {
            window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        }
        window.addEventListener("scroll", handleIsSticky);
        return () => {
            window.removeEventListener("scroll", handleIsSticky);
        };
    }, [isSticky]);
    return (
        <>
            <header id="header" className="sticky">
                <div className="navb">
                    <a to="/" className="navbar-title">
                        <span>Thesis Management</span>
                    </a>
                    <nav className="nav_actions">
                        <Navbar role={role} />
                    </nav>
                    <Link to="/login">
                        <div className="btn">Login</div>
                    </Link>
                    {/* <UserDropdown /> */}
                </div>
            </header>
        </>
    );
};

export default memo(Header);
