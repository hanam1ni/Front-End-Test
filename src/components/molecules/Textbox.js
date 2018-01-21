import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class Textbox extends Component {
    render() {
        const { title, children } = this.props
        return <div className="textbox-container">
            { title && <div className="textbox-title">{title}</div> }
            <div className="textbox-content">
                <p>{children}</p>
            </div>
        </div>
    }
}

Textbox.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
}

Textbox.defaultProps = {
    title: null,
    children: null
}