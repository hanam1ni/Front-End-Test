import React, { Component } from 'react'
import Button from 'atoms/Button.js'
import Select from 'atoms/Select.js'
import OrderSummary from 'molecules/OrderSummary.js'
import AddProductInput from 'molecules/AddProductInput.js'
import ProductTable from 'molecules/ProductTable.js'
import mockData from '../../store/orderPageData.json'
import logo from 'statics/icons/logo-white.svg';
export default class EditOrderSubPageMobile extends Component {
    render() {
        return (
            <div className="edit-order-page-container">
                <div className="edit-order-header">
                    <div className="edit-order-header-detail">
                        <h1>{mockData.orderHeaderDetail.name}</h1>
                        <span>{mockData.orderHeaderDetail.address}</span>
                    </div>
                    <div className="edit-order-header-select">
                        <Button>Update Order</Button>
                        <div className="order-header-title">Created By</div>
                        <Select>
                        { mockData.orderHeaderSelect.owner.map((owner) => (
                            <option value={owner.value}>{owner.title}</option>
                        )) }
                        </Select>
                        <div className="order-header-title">Status</div>
                        <Select>
                        { mockData.orderHeaderSelect.status.map((status) => (
                            <option value={status.value}>{status.title}</option>
                        )) }
                        </Select>
                    </div>
                </div>
                <div className="separator" />
                <div className="edit-order-summary">
                    <OrderSummary summaryData={mockData.summaryData} />
                </div>
                <div className="separator" />
                <div className="edit-order-add-product">
                    <AddProductInput placeholder="Add Products" />
                </div>
                <div className="edit-order-remark">
                    <span>Remark</span>
                    <p>{ mockData.remarkContent }</p>
                </div>
                <div className="edit-order-table">
                    <ProductTable tableData={mockData.tableData} />
                </div>
                <div className="sidebar-footer-container">
                    <div>POWERED BY</div>
                    <img src={logo} className="sidebar-footer-logo" />
                </div>
            </div>
        )
    }
}