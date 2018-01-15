import React, { Component } from 'react'
import Sidebar from 'organisms/Sidebar.js'
import EditOrderSubPage from 'organisms/EditOrderSubpage.js'
import Responsive from 'react-responsive'

export default class OrderPage extends Component {
    render() {
        const Desktop = (props) => (<Responsive {...props} minWidth={769} />)
        const Mobile = (props) => (<Responsive {...props} maxWidth={768} />)
        return (
            <div>
                <Desktop>
                    <div className="order-page-container">
                        <div className="side-bar-container">
                            <Sidebar initialActive={1} />
                        </div>
                        <div className="sub-page-container">
                            <EditOrderSubPage />
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    
                </Mobile>
            </div>
        )
    }
}