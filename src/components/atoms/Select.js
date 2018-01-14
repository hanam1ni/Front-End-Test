import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Select extends Component {
    render () {
        const { styleClass, children, defaultOption } = this.props
        const selectClass = styleClass ? `select-container ${styleClass}` : 'select-container'
        return (
            <div className={selectClass}>
                <FormControl componentClass="select" className="select-default" defaultValue={defaultOption}>
                    {children}
                </FormControl>
                <div class="select-arrow"></div>
            </div>
        )
    }
}

Select.propTypes = {
    children: PropTypes.node,
    styleClass: PropTypes.string,
    defaultOption: PropTypes.string,
}

Select.defaultProps = {
    children: null,
    styleClass: '',
    defaultOption: ''
}