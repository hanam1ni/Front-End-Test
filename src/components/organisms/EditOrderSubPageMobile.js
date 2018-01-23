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
            <section className="edit-order-page-container">
                <header className="page-header">
                    <section className="header-detail">
                        <h1>{mockData.orderHeaderDetail.name}</h1>
                        <span>{mockData.orderHeaderDetail.address}</span>
                    </section>
                    <section className="header-select">
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
                    </section>
                </header>
                <div className="separator" />
                <section className="page-summary">
                    <OrderSummary summaryData={mockData.summaryData} />
                </section>
                <div className="separator" />
                <section className="page-add-product">
                    <AddProductInput placeholder="Add Products" stretch />
                </section>
                <section className="page-remark">
                    <span>Remark</span>
                    <p>{ mockData.remarkContent }</p>
                </section>
                <section className="page-table">
                    <ProductTable tableData={mockData.tableData} />
                </section>
                <footer className="footer-container">
                    <div>POWERED BY</div>
                    <img src={logo} />
                </footer>
            </section>
        )
    }
}