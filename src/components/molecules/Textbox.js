import React from 'react';
import PropTypes from 'prop-types'; 

const Textbox = ({ title, children }) => (
    <article className="textbox-container">
        { title && <header className="textbox-title">{title}</header> }
        <article className="textbox-content">
            <p>{children}</p>
        </article>
    </article>
)

Textbox.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
}

Textbox.defaultProps = {
    title: null,
    children: null
}

export default Textbox