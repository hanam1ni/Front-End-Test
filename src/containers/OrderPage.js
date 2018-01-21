import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MobileTopBar from 'molecules/MobileTopBar.js'
import Navigation from 'organisms/Navigation.js'
import NavigationMobile from 'organisms/NavigationMobile.js'
import EditOrderSubPage from 'organisms/EditOrderSubPage.js'
import EditOrderSubPageMobile from 'organisms/EditOrderSubPageMobile.js'

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
        const Desktop = (props) => (<MediaQuery  {...props} minDeviceWidth={769} />)
        const Mobile = (props) => (<MediaQuery  {...props} maxDeviceWidth={768} />)
        return (
            <div>
                <Desktop>
                    <div className="order-page-container">
                        <div className="side-bar-container">
                            <Navigation initialActive={1} />
                        </div>
                        <div className="sub-page-container">
                            <EditOrderSubPage />
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="order-page-container">
                        <NavigationMobile 
                            isLogin
                            initialActive={0}
                            isActive={this.state.mobileNavActive} 
                            maskOnClick={this.handleToggleNav.bind(this)}
                            userName="Somchai"
                            userCompany="Twin Types Coporation" 
                        />
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