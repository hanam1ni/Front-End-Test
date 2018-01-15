import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

export default class MobileTopBar extends Component {
    render () {
        const { title } = this.props
        return (
            <div className="mobile-top-bar-container">
                <a><img src="icons/arrow-orange.svg" className="back-icon"/></a>
                {title}
                <a><img src="icons/magnifying-glass.svg" className="magnify-icon"/></a>
            </div>
        )
    }
}

MobileTopBar.propTypes = {
    title: PropTypes.string
}

MobileTopBar.defaultProps = {
    title: ''
}