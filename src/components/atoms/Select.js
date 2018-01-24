import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { InputGroup, FormControl } from 'react-bootstrap';

const Select = ({ styleclass, children, defaultOption }) => {
    const selectClass = classNames('select-container', styleclass)
    return (
        <div className={selectClass}>
            <FormControl componentClass="select" className="select-default" defaultValue={defaultOption}>
                {children}
            </FormControl>
        </div>
    )
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

export default Select