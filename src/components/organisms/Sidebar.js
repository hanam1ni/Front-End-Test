import React, { Component } from 'react';
import SideMenu from 'molecules/SideMenu.js';

import logo from 'statics/icons/logo-white.svg';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-logo-container">
                    <img src={logo} className="sidebar-logo" />
                </div>
                <div className="sidebar-sidemenu-container">
                    <SideMenu />
                </div>
                <div className="sidebar-footer-container">
                    <div>POWERED BY</div>
                    <img src={logo} className="sidebar-footer-logo" />
                </div>
            </div>
        )
    }
}