import React, { Component } from 'react'
import Button from 'atoms/Button.js'
import Breadcrumb from 'molecules/Breadcrumb.js'
import OrderHeader from 'molecules/OrderHeader.js'
import AddProductInput from 'molecules/AddProductInput.js'
import ProductTable from 'molecules/ProductTable.js'
import Textbox from 'molecules/Textbox.js'
import OrderSummary from 'molecules/OrderSummary.js'

export default class EditOrderPage extends Component {
    render() {
        const orderHeaderDetail = {
            name: 'CPF Saraburi',
            address: 'Highway 2, Kaeng Khoi Saraburi Thailand',
            tel: '+66 087 348 79 34',
        }
        const orderHeaderSelect = {
            type: 'Retailers',
            owner: 'Tom Hank',
            status: 'Pending',
        }
        const tableData = [
            {
                sku: 'TN SO 000015',
                description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
                brand: 'Schneider Electric',
                listPrice: 'THB 880',
                discount: '30%',
                netPrice: 'THB 660',
                qty: '16',
                total: 'THB 50,079,8823'
            },
            {
                sku: 'TN SO 000015',
                description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
                brand: 'Schneider Electric',
                discount: '30%',
                netPrice: 'THB 660',
                qty: '16',
            }
        ]
        const title = 'Remarks'
        const content = `'Content', 'When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope. So to get us off of first base, let’s define some of the key terms that pertain to telescopes to help you be able to talk to them more intelligently. '`
        const summaryData = {
            deliveryDate: '14-10-2016',
            subTotal: 40033,
            shipping: 0,
            discount: 9999.999,
            tax: {
                percent: 7,
                value: 1826
            },
            total: 41585.31 
        }
        return (
            <div className="edit-order-page-container">
                <div className="edit-order-breadcrumb">
                    <Breadcrumb levels={['Order','TN SO 000015']}/>
                </div>
                <div className="edit-order-header">
                    <div className="edit-order-order-header">
                        <OrderHeader detail={orderHeaderDetail} selection={orderHeaderSelect}></OrderHeader>
                    </div>
                    <div className="edit-order-header-button">
                        <a className="back-link">Back</a>
                        <Button styleClass="update-button" >Update Order</Button>
                    </div>
                </div>
                <div className="edit-order-add-product">
                    <AddProductInput stretch placeholder="Add Products" />
                </div>
                <div className="edit-order-table">
                    <ProductTable tableData={tableData} />
                </div>
                <div className="edit-order-remark">
                    <Textbox title={title}>{content}</Textbox>
                </div>
                <div className="edit-order-summary">
                    <OrderSummary summaryData={summaryData} />
                </div>
            </div>
        )
    }
}