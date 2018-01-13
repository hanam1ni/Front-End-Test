import React, { Component } from 'react'
import Sidebar from 'organisms/Sidebar.js'
import EditOrderSubPage from 'organisms/EditOrderSubpage.js'

export default class OrderPage extends Component {
    render() {
        return (
            <div className="order-page-container">
                <Sidebar />
                <EditOrderSubPage />
            </div>
        )
    }
}