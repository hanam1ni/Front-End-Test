import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Select extends Component {
    render () {
        const { styleclass, children, defaultOption } = this.props
        const selectClass = styleclass ? `select-container ${styleclass}` : 'select-container'
        return (
            <div className={selectClass}>
                <FormControl componentClass="select" className="select-default" defaultValue={defaultOption}>
                    {children}
                </FormControl>
                <div className="select-arrow"></div>
            </div>
        )
    }
}

Select.propTypes = {
    children: PropTypes.node,
    styleclass: PropTypes.string,
    defaultOption: PropTypes.string,
}

Select.defaultProps = {
    children: null,
    styleclass: '',
    defaultOption: ''
}