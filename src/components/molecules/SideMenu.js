import React, { Component } from 'react';

export default class SideMenu extends Component {
    handleItemClick (a) {
        console.log(a)
    }

    render () {
        const MenuItem = (active) => {
            return <div className="side-menu-item" onClick={() => {this.handleItemClick(1)}}>
                <div className="side-menu-icon">
                    { active && <div className="side-menu-active"></div> }
                    <img role="img" src={require("statics/icons/icon_plus.svg")} className="item-icon" />
                </div>
                <div className="side-menu-title">
                    Dashboard
                </div>
            </div>
        }
        return <div className="side-menu-container">
            {MenuItem(true)}
        </div>
    }
}