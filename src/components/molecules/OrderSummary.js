import React, { Component } from 'react';
import Input from 'atoms/Input.js';

export default class OrderSummary extends Component {
    render () {
        const { deliveryData, subTotal, shipping, discount, taxPercent, taxValue, total } = this.props
        return <div className="order-summary-container">
            <div className="order-summary-header">
                Estimated Delivery Date 
            </div>
            <div className="order-summary-data">
                <Input defaultValue={deliveryData} />
            </div>
            <div class="line-separator"></div>
            <div className="order-summary-header">
                Sub-total
            </div>
            <div className="order-summary-data order-summary-sub-total">
                {subTotal}
            </div>
            <div className="order-summary-header">
                Shipping
            </div>
            <div className="order-summary-data">
                <Input defaultValue={shipping} />
            </div>
            <div className="order-summary-header">
                Special Discount
            </div>
            <div className="order-summary-data">
                <Input defaultValue={discount} />
            </div>
            <div className="order-summary-header">
                Tax
            </div>
            <div className="order-summary-data order-summary-tax">
                <div>
                    <Input defaultValue={taxPercent} className="input-tax" stretch/>
                </div>
                <div>
                    <span>% {taxValue}</span>
                </div>
            </div>
            <div class="line-separator"></div>
            <div className="order-summary-total">
                <div class="order-total-header">
                    Total
                </div>
                <div class="order-total-data">
                    <span>{total}</span>
                </div>
            </div>
        </div>
    }
}