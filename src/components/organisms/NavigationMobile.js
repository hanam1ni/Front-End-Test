import React, { Component } from 'react';
import SideMenu from 'molecules/SideMenu.js';
import PropTypes from 'prop-types'; 
import logo from 'statics/icons/logo-white.svg';

export default class NavigationMobile extends Component {
    render() {
        const { isActive, userName, userCompany, isLogin, initialActive } = this.props
        const sidebarClass = isActive ? "sidebar-container active" : "sidebar-container"
        return (
            <div className="navigation-container">
                <div className={sidebarClass}>
                    <div className="sidebar-logo-container">
                        <img src={logo} className="sidebar-logo" />
                    </div>
                    { isLogin && 
                        <div className="sidebar-user">
                            <div className="user-name">Hello, {userName}</div>
                            <div className="user-company">{userCompany}</div>
                        </div>
                    }
                    <div className="sidebar-sidemenu-container">
                        <SideMenu itemActive={initialActive} isLogin={isLogin} />
                    </div>
                    <div className="sidebar-footer-container">
                        <div>POWERED BY</div>
                        <img src={logo} className="sidebar-footer-logo" />
                    </div>
                </div>
            </div>
        )
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