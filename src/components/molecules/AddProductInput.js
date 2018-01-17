import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { InputGroup, FormControl } from 'react-bootstrap';
import addIcon from 'statics/icons/icon_plus.svg'

export default class AddProductInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formFocus: false,
        };
    }

    render () {
        const { formFocus } = this.state
        const { stretch, placeholder } = this.props
        const InputGroupClass = [
            "add-product-input",
            stretch ? "add-product-input-stretch" : null
        ].join(' ')
        const toggleFocus = () => {
            this.setState({
                formFocus: !(this.state.formFocus)
            })
        }
        return (
            <InputGroup className={InputGroupClass}>
                <img role="img" src={addIcon} className={formFocus ? "add-icon active" : "add-icon"} />
                <FormControl type="text" placeholder={placeholder} onFocus={() => toggleFocus()} onBlur={() => toggleFocus()}/>
            </InputGroup>
        )
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