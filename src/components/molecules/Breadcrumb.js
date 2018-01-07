import React, { Component } from 'react';

export default class Breadcrumb extends Component {
    render() {
        const levels = ['Order', 'TN SO 000015']
        return <div className="breadcrumb-container">
            {levels.map((levelName) => (
                <span>
                    {levelName}
                </span>
            ))}
        </div>
    }
}
