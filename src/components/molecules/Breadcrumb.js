import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export default class Breadcrumb extends Component {
    render() {
        const { levels } = this.props
        return <div className="breadcrumb-container">
            {levels.map((levelName) => (
                <span>
                    {levelName}
                </span>
            ))}
        </div>
    }
}

Breadcrumb.propTypes = {
    levels: PropTypes.array
}

Breadcrumb.defaultProps = {
    levels: []
}