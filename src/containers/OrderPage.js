import React, { Component } from 'react'
import MobileTopBar from 'molecules/MobileTopBar.js'
import Sidebar from 'organisms/Sidebar.js'
import EditOrderSubPage from 'organisms/EditOrderSubPage.js'
import EditOrderSubPageMobile from 'organisms/EditOrderSubPageMobile.js'
import NavigationMobile from 'organisms/NavigationMobile.js'
import Responsive from 'react-responsive'

export default class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNavActive: false,
        };
    }

    handleToggleNav() {
        this.setState({
            mobileNavActive: !(this.state.mobileNavActive)
        });
    }

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
                    <div className="order-page-container">
                        <NavigationMobile isActive={this.state.mobileNavActive} isLogin userName="Somchai" userCompany="Twin Types Coporation"  />
                        <MobileTopBar backOnClick={this.handleToggleNav.bind(this)} title="Edit ORD07070707"/>
                        <div className="sub-page-container">
                            <EditOrderSubPageMobile />
                        </div>
                    </div>
                </Mobile>
            </div>
        )
    }
}