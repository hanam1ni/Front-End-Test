import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Select extends Component {
    render () {
        return (
            <FormControl componentClass="select" placeholder="select">
				<option value="select">select</option>
				<option value="other">...</option>
			</FormControl>
        )
    }
}