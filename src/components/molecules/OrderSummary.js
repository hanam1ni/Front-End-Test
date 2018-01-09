import React, { Component } from 'react';
import Input from 'atoms/Input.js';

export default class OrderSummary extends Component {
    render () {
        return <div className="order-summary-container">
            <div className="order-summary-header">
                Estimated Delivery Date 
            </div>
            <div className="order-summary-data">
                <Input defaultValue="14-10-2016" />
            </div>
            <div class="line-separator"></div>
            <div className="order-summary-header">
                Sub-total
            </div>
            <div className="order-summary-data order-summary-sub-total">
                40,033
            </div>
            <div className="order-summary-header">
                Shipping
            </div>
            <div className="order-summary-data">
                <Input defaultValue="0" />
            </div>
            <div className="order-summary-header">
                Special Discount
            </div>
            <div className="order-summary-data">
                <Input defaultValue="9,999.999" />
            </div>
            <div className="order-summary-header">
                Tax
            </div>
            <div className="order-summary-data">
                <Input defaultValue="7" />
                <span> % 1,826.00</span>
            </div>
            <div class="line-separator"></div>
            <div className="order-summary-header order-summary-total">
                Total
            </div>
            <div className="order-summary-data order-summary-total">
                <span>THB 41,585.31</span>
            </div>
        </div>
    }
}