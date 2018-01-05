import React, { Component } from 'react';
import { Button as DefaultButton } from 'react-bootstrap'

export default class Button extends Component {
    render() {
        const {secondary, children} = this.props
        const buttonClass = secondary ? "button-secondary" : "button-default"
        return <DefaultButton className={buttonClass} {...this.props}>{children}</DefaultButton>
    }
}