import React, { Component } from 'react';
import SideMenu from 'molecules/SideMenu.js';
import PropTypes from 'prop-types'; 
import logo from 'statics/icons/logo-white.svg';

export default class Navigation extends Component {
    render() {
        const { isLogin, initialActive, userName, userCompany } = this.props
        return (
            <div className="navigation-container">
                <div className="logo-container">
                    <img src={logo} />
                </div>
                { isLogin && 
                    <div className="user-info">
                        <div className="info-name">Hello, {userName}</div>
                        <div className="info-company">{userCompany}</div>
                    </div>
                }
                <div className="sidemenu-container">
                    <SideMenu itemActive={initialActive} isLogin={isLogin} />
                </div>
                <div className="footer-container">
                    <div>POWERED BY</div>
                    <img src={logo} />
                </div>
            </div>
        )
    }
}

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