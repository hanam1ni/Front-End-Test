import React from 'react';
import SideMenu from 'molecules/SideMenu.js';
import PropTypes from 'prop-types'; 
import logo from 'statics/icons/logo-white.svg';

const Navigation = ({ isLogin, initialActive, userName, userCompany }) => (
    <nav className="navigation-container">
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
)

Navigation.propTypes = {
    isLogin: PropTypes.bool,
    userName: PropTypes.string,
    userCompany: PropTypes.string,
    initialActive: PropTypes.number
}

Navigation.defaultProps = {
    isLogin: false,
    userName: '',
    userCompany: '',
    initialActive: null
}

export default Navigation