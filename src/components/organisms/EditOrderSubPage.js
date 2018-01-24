import React from 'react'
import Button from 'atoms/Button.js'
import Breadcrumb from 'molecules/Breadcrumb.js'
import OrderHeader from 'molecules/OrderHeader.js'
import AddProductInput from 'molecules/AddProductInput.js'
import ProductTable from 'molecules/ProductTable.js'
import Textbox from 'molecules/Textbox.js'
import OrderSummary from 'molecules/OrderSummary.js'
import mockData from '../../store/orderPageData.json'

const EditOrderSubPage = (props) => (
    <section className="edit-order-page-container">
        <header className="page-header">
            <section className="header-breadcrumb" >
                <Breadcrumb levels={mockData.breadcrumbLevel} />
            </section>
            <section className="header-select" >
                <div className="page-order-header">
                    <OrderHeader detail={mockData.orderHeaderDetail} selection={mockData.orderHeaderSelect}></OrderHeader>
                </div>
                <div className="page-header-button">
                    <a className="back-link">Back</a>
                    <Button styleclass="update-button">Update Order</Button>
                </div>
            </section>
        </header>
        <section className="page-add-product">
            <AddProductInput stretch placeholder="Add Products" productData={mockData.tableData} />
        </section>
        <section className="page-table">
            <ProductTable tableData={mockData.tableData} />
        </section>
        <section className="page-remark">
            <Textbox title="Remarks">{mockData.remarkContent}</Textbox>
        </section>
        <section className="page-summary">
            <OrderSummary summaryData={mockData.summaryData} />
        </section>
    </section>
)

export default EditOrderSubPage
