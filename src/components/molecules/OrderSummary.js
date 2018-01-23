import React, { Component } from 'react';
import Input from 'atoms/Input.js';

export default class OrderSummary extends Component {
    render () {
        const { deliveryDate, subTotal, shipping, discount, tax: { percent:taxPercent, value:taxValue }, total } = this.props.summaryData
        
        return (
            <section className="order-summary-container">
                <section className="summary-date">
                    <div className="summary-header">
                        Estimated Delivery Date 
                    </div>
                    <div className="summary-data">
                        <Input defaultValue={deliveryDate} />
                    </div>
                </section>
                <div className="line-separator" />
                <section className="summary-sub-total">
                    <div className="summary-header">
                        Sub-total
                    </div>
                    <div className="sub-total-data">
                        {subTotal.toLocaleString()}
                    </div>
                </section>
                <section className="summary-shipping">
                    <div className="summary-header">
                        Shipping
                    </div>
                    <div className="summary-data">
                        <Input defaultValue={shipping.toLocaleString()} />
                    </div>
                </section>
                <section className="summary-discount">
                    <div className="summary-header">
                        Special Discount
                    </div>
                    <div className="summary-data">
                        <Input defaultValue={discount} />
                    </div>
                </section>
                <section className="summary-tax">
                    <div className="summary-header">
                        Tax
                    </div>
                    <div className="summary-data">
                        <div className="summary-tax-percent">
                            <Input defaultValue={taxPercent} className="input-tax" />
                        </div>
                        <div className="summary-tax-value">
                            <span> % {taxValue.toFixed(2)}</span>
                        </div>
                    </div>
                </section>
                <div className="line-separator" />
                <section className="summary-total">
                    <div className="total-header">
                        Total
                    </div>
                    <div className="total-data">
                        THB {total.toLocaleString()}
                    </div>
                </section>
            </section>
        )
    }
}