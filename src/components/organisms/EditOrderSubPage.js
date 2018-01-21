import React, { Component } from 'react'
import Button from 'atoms/Button.js'
import Breadcrumb from 'molecules/Breadcrumb.js'
import OrderHeader from 'molecules/OrderHeader.js'
import AddProductInput from 'molecules/AddProductInput.js'
import ProductTable from 'molecules/ProductTable.js'
import Textbox from 'molecules/Textbox.js'
import OrderSummary from 'molecules/OrderSummary.js'
import mockData from '../../store/orderPageData.json'

export default class EditOrderSubPage extends Component {
    render() {
        return (
            <div className="edit-order-page-container">
                <div className="page-breadcrumb">
                    <Breadcrumb levels={mockData.breadcrumbLevel} />
                </div>
                <div className="page-header">
                    <div className="page-order-header">
                        <OrderHeader detail={mockData.orderHeaderDetail} selection={mockData.orderHeaderSelect}></OrderHeader>
                    </div>
                    <div className="page-header-button">
                        <a className="back-link">Back</a>
                        <Button styleclass="update-button">Update Order</Button>
                    </div>
                </div>
                <div className="page-add-product">
                    <AddProductInput stretch placeholder="Add Products" />
                </div>
                <div className="page-table">
                    <ProductTable tableData={mockData.tableData} />
                </div>
                <div className="page-remark">
                    <Textbox title="Remarks">{mockData.remarkContent}</Textbox>
                </div>
                <div className="page-summary">
                    <OrderSummary summaryData={mockData.summaryData} />
                </div>
            </div>
        )
    }
}