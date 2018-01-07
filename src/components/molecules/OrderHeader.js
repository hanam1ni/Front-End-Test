import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap'

export default class OrderHeader extends Component {
    render() {
        const {secondary, children} = this.props
        const buttonClass = secondary ? "button-secondary" : "button-default"
        return <div className="order-header-container">
            <div className="order-header-detail">
                <h2>CPF Saraburi</h2>
            </div>
            <div className="order-header-detail">
                <p>Highway 2, Kaeng Khoi Saraburi Thailand</p>
            </div>
            <div className="order-header-detail">
                <p>+66 087 348 79 34</p>
            </div>
            <div class="order-header-select">
                <span>Type</span>
            </div>
            <div class="order-select">
                <DropdownButton
                    title="Tom Hank"
                    className="dropdownButton-default order-dropdown"
                >
                </DropdownButton>
            </div>
            <div class="order-header-select">
                <span>Owned By</span>
            </div>
            <div class="order-select">
                <DropdownButton
                    title="Tom Hank"
                    className="dropdownButton-default order-dropdown"
                >
                </DropdownButton>
            </div>
            <div class="order-header-select">
                <span>Status</span>
            </div>
            <div class="order-select">
                <DropdownButton
                    title="Tom Hank"
                    className="dropdownButton-default order-dropdown"
                >
                </DropdownButton>
            </div>
        </div>
    }
}