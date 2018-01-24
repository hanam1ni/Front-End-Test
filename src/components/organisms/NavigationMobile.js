import React, { Component } from 'react';
import SideMenu from 'molecules/SideMenu.js';
import PropTypes from 'prop-types'; 
import logo from 'statics/icons/logo-white.svg';

const NavigationMobile = ({ isActive, userName, userCompany, isLogin, initialActive, maskOnClick }) => {
    const navigationClass = isActive ? "navigation-container active" : "navigation-container"
    return [
        (isActive ? <div className="page-mask" key="pageMask" onClick={() => maskOnClick()} /> : null),
        <nav className={navigationClass} key="navigation" >
            <div className="logo-container">
                <img src={logo} />
            </div>
            <section className="sidemenu-container">
                { isLogin && 
                    <div className="user-info">
                        <div className="info-name">Hello, {userName}</div>
                        <div className="info-company">{userCompany}</div>
                    </div>
                }
                <SideMenu itemActive={initialActive} isLogin={isLogin} />
            </section>
            <footer className="footer-container">
                <div>POWERED BY</div>
                <img src={logo} />
            </footer>
        </nav>
    ]
}

NavigationMobile.propTypes = {
    isLogin: PropTypes.bool,
    userName: PropTypes.string,
    userCompany: PropTypes.string,
    initialActive: PropTypes.number
}

NavigationMobile.defaultProps = {
    isLogin: false,
    userName: '',
    userCompany: '',
    initialActive: null
}

export default NavigationMobile