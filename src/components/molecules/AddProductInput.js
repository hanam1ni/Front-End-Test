import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { InputGroup, FormControl } from 'react-bootstrap';
import addIcon from 'statics/icons/icon_plus.svg'
import { debounce } from 'lodash';

export default class AddProductInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formFocus: false,
            formOnChange: false,
        };
        this.handleOnChangeTimeout = debounce(() => { 
            this.setState({
                formOnChange: false
            })
        }, 400)
    }

    handleOnChange() {
        this.setState({
            formOnChange: true
        })
        this.handleOnChangeTimeout()
    }

    handleToggleFocus() {
        this.setState({
            formFocus: !(this.state.formFocus)
        })
    }

    render () {
        const { formFocus } = this.state
        const { stretch, placeholder } = this.props
        const InputGroupClass = [
            "add-product-input",
            stretch ? "add-product-input-stretch" : null
        ].join(' ')
        return (
            <InputGroup className={InputGroupClass}>
                <img role="img" src={addIcon} className={formFocus ? "add-icon active" : "add-icon"} />
                <FormControl 
                    type="text"
                    placeholder={placeholder} 
                    onChange={() => this.handleOnChange()}
                    onFocus={() => this.handleToggleFocus()}
                    onBlur={() => this.handleToggleFocus()}
                />
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