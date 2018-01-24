import React from 'react';
import PropTypes from 'prop-types'; 
import classNames from 'classnames';
import { Button as DefaultButton } from 'react-bootstrap'

const Button = (props) => {
    const { styleclass, children } = props
    const buttonClass = classNames('button-default', styleclass)
    return <DefaultButton className={buttonClass} {...props}>{children}</DefaultButton>
}

Button.propTypes = {
    children: PropTypes.node
}

Button.defaultProps = {
    children: null
}

export default Button