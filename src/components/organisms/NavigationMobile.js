import React, { Component } from 'react';
import SideMenu from 'molecules/SideMenu.js';
import PropTypes from 'prop-types'; 
import logo from 'statics/icons/logo-white.svg';

export default class NavigationMobile extends Component {
    render() {
        const { isActive, userName, userCompany, isLogin, initialActive, maskOnClick } = this.props
        const navigationClass = isActive ? "navigation-container active" : "navigation-container"
        return [
            (isActive ? <div className="page-mask" onClick={() => maskOnClick()} /> : null),
            <div className={navigationClass}>
                <div className="logo-container">
                    <img src={logo} />
                </div>
                <div className="sidemenu-container">
                    { isLogin && 
                        <div className="user-info">
                            <div className="info-name">Hello, {userName}</div>
                            <div className="info-company">{userCompany}</div>
                        </div>
                    }
                    <SideMenu itemActive={initialActive} isLogin={isLogin} />
                </div>
                <div className="footer-container">
                    <div>POWERED BY</div>
                    <img src={logo} />
                </div>
            </div>
        ]
    }
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