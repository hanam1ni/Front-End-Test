import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Input extends Component {
    render () {
        const { stretch } = this.props
        const inputGroupClass = stretch ? 'input-group-stretch' : null
        return <InputGroup className={inputGroupClass}>
            <FormControl type="text" {...this.props}/>
        </InputGroup>
    }
}