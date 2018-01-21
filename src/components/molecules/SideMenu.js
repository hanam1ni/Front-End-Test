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
            const itemClass = isActive ? "item-active" : "item"
            return (
                <div className={itemClass} key={title} onClick={() => {this.handleItemClick(itemKey)}}>
                    <div className="item-icon">
                        <img src={ isActive ? urlActiveIcon : urlIcon } />
                    </div>
                    <div className="item-title">
                        { title }
                        { hasChild &&  <img src={ isActive ? "/icons/arrow-white.svg" : "/icons/arrow-purple.svg" } /> }
                    </div>
                </div>
            )
        }

        return <div className="side-menu-container">
            { sideMenuContent.map((item, itemKey) => (MenuItem(item, itemKey))) }
            { this.props.isLogin && 
                <div className="item">
                    <div className="item-title">Log Out</div> 
                </div>
            }
        </div>
    }
}