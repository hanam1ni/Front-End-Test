import React from 'react';
import PropTypes from 'prop-types'; 

const Breadcrumb = ({ levels }) => (
    <div className="breadcrumb-container">
        {levels.map((levelName) => (
            <span key={levelName}>
                {levelName}
            </span>
        ))}
    </div>
)

Breadcrumb.propTypes = {
    levels: PropTypes.array
}

Breadcrumb.defaultProps = {
    levels: []
}

export default Breadcrumb