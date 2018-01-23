import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class Textbox extends Component {
    render() {
        const { title, children } = this.props
        return <article className="textbox-container">
            { title && <header className="textbox-title">{title}</header> }
            <article className="textbox-content">
                <p>{children}</p>
            </article>
        </article>
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