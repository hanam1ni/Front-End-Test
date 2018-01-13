import React, { Component } from 'react';
import Input from 'atoms/Input.js';

export default class OrderSummary extends Component {
    render () {
        const { deliveryDate, subTotal, shipping, discount, tax: { percent:taxPercent, value:taxValue }, total } = this.props.summaryData

        const valueWithCommas = (value) => {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        return <div className="order-summary-container">
            <div className="order-summary-header">
                Estimated Delivery Date 
            </div>
            <div className="order-summary-data">
                <Input value={deliveryDate} />
            </div>
            <div class="line-separator"></div>
            <div className="order-summary-header">
                Sub-total
            </div>
            <div className="order-summary-data order-summary-sub-total">
                {subTotal.toLocaleString()}
            </div>
            <div className="order-summary-header">
                Shipping
            </div>
            <div className="order-summary-data">
                <Input value={shipping.toLocaleString()} />
            </div>
            <div className="order-summary-header">
                Special Discount
            </div>
            <div className="order-summary-data">
                <Input value={discount} />
            </div>
            <div className="order-summary-header">
                Tax
            </div>
            <div className="order-summary-tax">
                <div className="order-summary-data order-summary-tax-percent">
                    <Input value={taxPercent} className="input-tax" />
                </div>
                <div>
                    <span>%</span>
                </div>
                <div className="order-summary-data order-summary-tax-value">
                    <span>{taxValue.toFixed(2).toLocaleString()}</span>
                </div>
            </div>
            <div class="line-separator"></div>
            <div className="order-summary-total">
                <div class="order-total-header">
                    Total
                </div>
                <div class="order-total-data">
                    <span>{total.toLocaleString()}</span>
                </div>
            </div>
        </div>
    }
}