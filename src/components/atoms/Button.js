import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Button as DefaultButton } from 'react-bootstrap'

export default class Button extends Component {
    render() {
        const {secondary, styleClass, children} = this.props
        const buttonClass = secondary ? `button-secondary ${styleClass}` : `button-default  ${styleClass}`
        return <DefaultButton className={buttonClass} {...this.props}>{children}</DefaultButton>
    }
}

Button.propTypes = {
    children: PropTypes.node,
    secondary: PropTypes.bool
}

Button.defaultProps = {
    children: null,
    secondary: false
}