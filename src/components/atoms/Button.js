import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Button as DefaultButton } from 'react-bootstrap'

export default class Button extends Component {
    render() {
        const { styleclass, children } = this.props
        const buttonClass = `button-default ${styleclass}`
        return <DefaultButton className={buttonClass} {...this.props}>{children}</DefaultButton>
    }
}

Button.propTypes = {
    children: PropTypes.node
}

Button.defaultProps = {
    children: null
}