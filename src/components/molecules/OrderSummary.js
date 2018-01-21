import React, { Component } from 'react';
import Input from 'atoms/Input.js';

export default class OrderSummary extends Component {
    render () {
        const { deliveryDate, subTotal, shipping, discount, tax: { percent:taxPercent, value:taxValue }, total } = this.props.summaryData
        
        return <div className="order-summary-container">
            <div className="summary-header">
                Estimated Delivery Date 
            </div>
            <div className="summary-data">
                <Input defaultValue={deliveryDate} />
            </div>
            <div className="line-separator" />
            <div className="summary-header">
                Sub-total
            </div>
            <div className="summary-sub-total">
                {subTotal.toLocaleString()}
            </div>
            <div className="summary-header">
                Shipping
            </div>
            <div className="summary-data">
                <Input defaultValue={shipping.toLocaleString()} />
            </div>
            <div className="summary-header">
                Special Discount
            </div>
            <div className="summary-data">
                <Input defaultValue={discount} />
            </div>
            <div className="summary-header">
                Tax
            </div>
            <div className="summary-tax">
                <div className="summary-tax-percent">
                    <Input defaultValue={taxPercent} className="input-tax" />
                </div>
                <div className="summary-tax-value">
                    <span> % {taxValue.toFixed(2)}</span>
                </div>
            </div>
            <div className="line-separator" />
            <div className="summary-total">
                <div className="total-header">
                    Total
                </div>
                <div className="total-data">
                    THB {total.toLocaleString()}
                </div>
            </div>
        </div>
    }
}