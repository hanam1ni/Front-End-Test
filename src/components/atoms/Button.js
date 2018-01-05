import React, { Component } from 'react';
import { Button as DefaultButton } from 'react-bootstrap'

export default class Button extends Component {
    render() {
        const {children} = this.props
        return <DefaultButton {...this.props} >{children}</DefaultButton>
    }
}