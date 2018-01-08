import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { InputGroup, FormControl } from 'react-bootstrap';
import addIcon from 'statics/icons/icon_plus.svg'

export default class AddProductInput extends Component {
    render () {
        const { stretch, placeholder } = this.props
        const InputGroupClass = [
            "add-product-input",
            stretch ? "add-product-input-stretch" : null
        ].join(' ')
        return <InputGroup className={InputGroupClass}>
            <img role="img" src={addIcon} />
            <FormControl type="text" placeholder={placeholder}/>
        </InputGroup>
    }
}

AddProductInput.propTypes = {
    placeholder: PropTypes.string,
    stretch: PropTypes.bool
}

AddProductInput.defaultProps = {
    placeholder: '',
    stretch: false
}