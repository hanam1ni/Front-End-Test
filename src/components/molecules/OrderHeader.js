import React, { Component } from 'react';

export default class OrderHeader extends Component {
    render() {
        const {secondary, children} = this.props
        const buttonClass = secondary ? "button-secondary" : "button-default"
        return <div className="order-header-container">
            <div className="order-header-detail">
                <h2>CPF Saraburi</h2>
                <p>Highway 2, Kaeng Khoi Saraburi Thailand</p>
                <p>+66 087 348 79 34</p>
            </div>
            <div className="order-header-select">

            </div>
        </div>
    }
}