import React from 'react'
import PropTypes from 'prop-types'; 

const MobileTopBar = ({ title, backOnClick }) => (
    <header className="mobile-top-bar-container">
        <a onClick={() => backOnClick()}><img src="icons/arrow-orange.svg" className="back-icon"/></a>
        {title}
        <a><img src="icons/magnifying-glass.svg" className="magnify-icon"/></a>
    </header>
)

MobileTopBar.propTypes = {
    title: PropTypes.string
}

MobileTopBar.defaultProps = {
    title: ''
}

export default MobileTopBar