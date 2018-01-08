import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import addIcon from 'statics/icons/icon_plus.svg'

export default class AddProductInput extends Component {
    render () {
        return <InputGroup className="add-product-input">
            <InputGroup.Addon><img role="img" src={addIcon} /></InputGroup.Addon>
            <FormControl type="text" />
        </InputGroup>
    }
}