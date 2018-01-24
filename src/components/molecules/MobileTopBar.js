import React from 'react'
import Svg from "react-inlinesvg";
import PropTypes from 'prop-types'; 

const MobileTopBar = ({ title, backOnClick }) => (
    <header className="mobile-top-bar-container">
        <a onClick={() => backOnClick()}><Svg src="icons/arrow-orange.svg" className="back-icon"/></a>
        {title}
        <a><Svg src="icons/magnifying-glass.svg" className="magnify-icon"/></a>
    </header>
)

MobileTopBar.propTypes = {
    title: PropTypes.string
}

MobileTopBar.defaultProps = {
    title: ''
}

export default MobileTopBar