import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'atoms/Select.js'

export default class OrderHeader extends Component {
    render() {
        const { detail, selection } = this.props
        return <div className="order-header-container">
            <div className="order-header-detail">
                <h2>{detail.name}</h2>
            </div>
            <div className="order-header-detail">
                <p>{detail.address}</p>
            </div>
            <div className="order-header-detail">
                <p>{detail.tel}</p>
            </div>
            <div class="order-header-select">
                <span>Type</span>
            </div>
            <div class="order-select">
                <DropdownButton
                    title={selection.type}
                    className="dropdownButton-default order-dropdown"
                >
                </DropdownButton>
            </div>
            <div class="order-header-select">
                <span>Owned By</span>
            </div>
            <div class="order-select">
                <DropdownButton
                    title={selection.owner}
                    className="dropdownButton-default order-dropdown"
                >
                </DropdownButton>
            </div>
            <div class="order-header-select">
                <span>Status</span>
            </div>
            <div class="order-select">
                <DropdownButton
                    title={selection.status}
                    className="dropdownButton-default order-dropdown"
                >
                </DropdownButton>
            </div>
        </div>
    }
}

OrderHeader.propTypes = {
   detail: PropTypes.object,
   selection: PropTypes.object
}

OrderHeader.defaultProps = {
    detail: {
        name: ' ',
        address: ' ',
        tel: ' ',
    },
    selection: {
        type: ' ',
        owner: ' ',
        status: ' ',
    }
}
