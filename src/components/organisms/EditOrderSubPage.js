import React, { Component } from 'react'
import Button from 'atoms/Button.js'
import Breadcrumb from 'molecules/Breadcrumb.js'
import OrderHeader from 'molecules/OrderHeader.js'
import AddProductInput from 'molecules/AddProductInput.js'
import ProductTable from 'molecules/ProductTable.js'
import Textbox from 'molecules/Textbox.js'
import OrderSummary from 'molecules/OrderSummary.js'
import mockData from '../../store/orderPageData.json'
export default class EditOrderPage extends Component {
    render() {
        return (
            <div className="edit-order-page-container">
                <div className="edit-order-breadcrumb">
                    <Breadcrumb levels={mockData.breadcrumbLevel} />
                </div>
                <div className="edit-order-header">
                    <div className="edit-order-order-header">
                        <OrderHeader detail={mockData.orderHeaderDetail} selection={mockData.orderHeaderSelect}></OrderHeader>
                    </div>
                    <div className="edit-order-header-button">
                        <a className="back-link">Back</a>
                        <Button styleClass="update-button">Update Order</Button>
                    </div>
                </div>
                <div className="edit-order-add-product">
                    <AddProductInput stretch placeholder="Add Products" />
                </div>
                <div className="edit-order-table">
                    <ProductTable tableData={mockData.tableData} />
                </div>
                <div className="edit-order-remark">
                    <Textbox title="Remarks">{mockData.remarkContent}</Textbox>
                </div>
                <div className="edit-order-summary">
                    <OrderSummary summaryData={mockData.summaryData} />
                </div>
            </div>
        )
    }
}