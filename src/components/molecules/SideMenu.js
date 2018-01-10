import React, { Component } from 'react';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemActive: 2,
        };
    }

    handleItemClick (itemKey) {
        this.setState({
            itemActive: itemKey,
        })
    }

    render () {
        const mockSideMenu = [
            {
                itemIcon: "statics/icons/icon_plus.svg",
                title: "Dashboard"
            },
            {
                itemIcon: "statics/icons/icon_plus.svg",
                title: "Orders"
            },
            {
                itemIcon: "statics/icons/icon_plus.svg",
                title: "Companies",
                hasChild: true,
            }
        ]
        const MenuItem = (item, itemKey) => {
            const isActive = itemKey === this.state.itemActive
            const { itemIcon, title, hasChild = false } = item
            const itemClass = isActive ? "side-menu-item-active" : "side-menu-item"
            return <div className={itemClass} key={title} onClick={() => {this.handleItemClick(itemKey)}}>
                <div className="side-menu-icon">
                    <div className="active-tab"></div>
                    <img src={require("statics/icons/icon_plus.svg")} className="item-icon" />
                </div>
                <div className="side-menu-title">
                    {title}
                    { hasChild &&  <img src={require("statics/icons/arrow-grey.svg")} className="arrow-icon" /> }
                </div>
            </div>
        }
        return <div className="side-menu-container">
            {mockSideMenu.map((item, itemKey) => (MenuItem(item, itemKey)))}
        </div>
    }
}