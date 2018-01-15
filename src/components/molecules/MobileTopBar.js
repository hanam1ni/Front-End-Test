import React, { Component } from 'react'

export default class MobileTopBar extends Component {
    render () {
        return (
            <div className="mobile-top-bar-container">
                <a onClick={() => console.log('Hello')}><img src="icons/arrow-orange.svg" className="back-icon"/></a>
                Edit ORD07070707
                <a><img src="icons/magnifying-glass.svg" className="magnify-icon"/></a>
            </div>
        )
    }
}