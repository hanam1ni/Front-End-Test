import React, { Component } from 'react';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemActive: props.itemActive,
        };
    }

    handleItemClick (itemKey) {
        this.setState({
            itemActive: itemKey,
        })
    }

    render () {
        const sideMenuContent = [
            {
                itemIcon: "controls",
                title: "Dashboard"
            },
            {
                itemIcon: "shopping-cart",
                title: "Orders"
            },
            {
                itemIcon: "factory",
                title: "Companies",
                hasChild: true
            },
            {
                itemIcon: "box",
                title: "Products"
            },
            {
                itemIcon: "document",
                title: "Documents"
            },
            {
                itemIcon: "pricing-label",
                title: "Pricing"
            },
            {
                itemIcon: "shapes",
                title: "Brands"
            },
            {
                itemIcon: "gear",
                title: "Settings",
                hasChild: true
            },
            {
                itemIcon: "chart",
                title: "Reports"
            },
            {
                itemIcon: "people",
                title: "Account Users"
            }
        ]

        const MenuItem = (item, itemKey) => {
            const isActive = itemKey === this.state.itemActive
            const { itemIcon, title, hasChild = false } = item
            const urlIcon = `/icons/${itemIcon}-purple.svg`
            const urlActiveIcon = `/icons/${itemIcon}-white.svg`
            const itemClass = isActive ? "side-menu-item-active" : "side-menu-item"
            return <div className={itemClass} key={title} onClick={() => {this.handleItemClick(itemKey)}}>
                <div className="side-menu-icon">
                    <div className="active-tab"></div>
                    <img src={ isActive ? urlActiveIcon : urlIcon } className="item-icon" />
                </div>
                <div className="side-menu-title">
                    {title}
                    { hasChild &&  <img src={ isActive ? "/icons/arrow-white.svg" : "/icons/arrow-purple.svg" } className="arrow-icon" /> }
                </div>
            </div>
        }

        return <div className="side-menu-container">
            {sideMenuContent.map((item, itemKey) => (MenuItem(item, itemKey)))}
        </div>
    }
}