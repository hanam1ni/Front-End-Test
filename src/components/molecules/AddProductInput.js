import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import addIcon from 'statics/icons/icon_plus.svg'

export default class AddProductInput extends Component {
    render () {
        const { stretch } = this.props
        const InputGroupClass = [
            "add-product-input",
            stretch ? "add-product-input-stretch" : null
        ].join(' ')
        console.log(InputGroupClass)
        return <InputGroup className={InputGroupClass}>
            <img role="img" src={addIcon} />
            <FormControl type="text" />
        </InputGroup>
    }
}