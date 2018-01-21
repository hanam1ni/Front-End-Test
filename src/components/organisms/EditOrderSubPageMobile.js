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
                <div className="page-header">
                    <div className="header-detail">
                        <h1>{mockData.orderHeaderDetail.name}</h1>
                        <span>{mockData.orderHeaderDetail.address}</span>
                    </div>
                    <div className="header-select">
                        <Button>Update Order</Button>
                        <div className="select-title">Created By</div>
                        <Select>
                        { mockData.orderHeaderSelect.owner.map((owner) => (
                            <option value={owner.value} key={owner.value}>{owner.title}</option>
                        )) }
                        </Select>
                        <div className="select-title">Status</div>
                        <Select>
                        { mockData.orderHeaderSelect.status.map((status) => (
                            <option value={status.value} key={status.value}>{status.title}</option>
                        )) }
                        </Select>
                    </div>
                </div>
                <div className="separator" />
                <div className="page-summary">
                    <OrderSummary summaryData={mockData.summaryData} />
                </div>
                <div className="separator" />
                <div className="page-add-product">
                    <AddProductInput placeholder="Add Products" stretch />
                </div>
                <div className="page-remark">
                    <span>Remark</span>
                    <p>{ mockData.remarkContent }</p>
                </div>
                <div className="page-table">
                    <ProductTable tableData={mockData.tableData} />
                </div>
                <div className="footer-container">
                    <div>POWERED BY</div>
                    <img src={logo} />
                </div>
            </div>
        )
    }
}