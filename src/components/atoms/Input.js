import React from 'react';
import classNames from 'classnames';
import { InputGroup, FormControl } from 'react-bootstrap';

const Input = (props) => {
    const { stretch } = props
    const inputGroupClass = classNames({ 'input-group-stretch':stretch })
    return (
        <InputGroup className={inputGroupClass}>
            <FormControl type="text" {...props}/>
        </InputGroup>
    )
}

export default Input