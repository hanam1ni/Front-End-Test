import React, { Component } from 'react'
import Button from 'atoms/Button.js'
import Select from 'atoms/Select.js'
import MobileTopBar from 'molecules/MobileTopBar.js'

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
                    <div className="line-separator" />
                </div>
            </div>
        )
    }
}