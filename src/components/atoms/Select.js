import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Select extends Component {
    render () {
        return (
            <FormControl componentClass="select" className="select-default" defaultValue="second">
				<option value="selects">Selects</option>
				<option value="second">Second</option>
                <option value="other">...</option>
			</FormControl>
        )
    }
}