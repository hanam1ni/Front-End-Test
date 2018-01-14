import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'atoms/Select.js'

export default class OrderHeader extends Component {
    render() {
        const { detail, selection } = this.props
        return <div className="order-header-container">
            <div className="order-header-detail">
                <h2>{detail.name}</h2>
                <p>{detail.address}</p>
                <p>{detail.tel}</p>
            </div>
            <div class="order-header-select">
                <span>Type</span>
                <Select defaultOption={selection.type}>
                { selection.type.map((type) => <option value={type.value}>{type.title}</option>) }
                </Select>
            </div>
            <div class="order-header-select">
                <span>Owned By</span>
                <Select defaultOption={selection.owner}>
                { selection.owner.map((owner) => <option value={owner.value}>{owner.title}</option>) }
                </Select>
            </div>
            <div class="order-header-select">
                <span>Status</span>
                <Select defaultOption={selection.status}>
                { selection.status.map((status) => <option value={status.value}>{status.title}</option>) }
                </Select>
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
