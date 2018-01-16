import React, { Component } from 'react'
import Button from 'atoms/Button.js'
import Select from 'atoms/Select.js'
import MobileTopBar from 'molecules/MobileTopBar.js'
import OrderSummary from 'molecules/OrderSummary.js'
import AddProductInput from 'molecules/AddProductInput.js'
import ProductTable from 'molecules/ProductTable.js'
import mockData from '../../store/orderPageData.json'
import logo from 'statics/icons/logo-white.svg';
export default class EditOrderSubPageMobile extends Component {
    render() {
        return (
            <div className="edit-order-page-container">
                <MobileTopBar title="Edit ORD07070707"/>
                <div className="edit-order-header">
                    <div className="edit-order-header-detail">
                        <h1>CPF Saraburi</h1>
                        <span>Highway 2, Kaeng Khoi Saraburi Thailand</span>
                    </div>
                    <div className="edit-order-header-select">
                        <Button>Update Order</Button>
                        <div className="order-header-title">Created By</div>
                        <Select>
                            <option value="tomHanks">Tom Hanks</option>
                        </Select>
                        <div className="order-header-title">Status</div>
                        <Select>
                            <option value="pending">Pending</option>
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
                    <p>When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. </p>
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