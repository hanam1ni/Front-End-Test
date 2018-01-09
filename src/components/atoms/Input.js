import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Input extends Component {
    render () {
        return <InputGroup>
            <FormControl type="text" {...this.props}/>
        </InputGroup>
    }
}