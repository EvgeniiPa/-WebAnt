import {  Outlet, NavLink } from "react-router-dom";
import Logo from "./Logo.svg";
import Heart from "./Heart.svg";
import "./Layout.css";

export default function Layout(){
    return(
        <>
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo-wrapper">
                    <img className="header__logotipe" src={Logo} alt="Logotipe" />
                </div>
                <nav className="header__navigation-wrapper">
                    <NavLink className="header__nav-item" to="/">
                         Character
                    </NavLink>
                    <NavLink className="header__nav-item" to="/location">
                          Locations
                    </NavLink>
                    <NavLink className="header__nav-item" to="/episode">
                           Episodes
                    </NavLink>
                </nav>
            </div>
        </header>

        <Outlet />

        <footer className="footer">
            <div className="footer__container">
                <img src={Heart} alt="" />
            </div>
        </footer>
        </>
    )
}