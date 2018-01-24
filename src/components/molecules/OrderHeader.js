import React from 'react'
import PropTypes from 'prop-types'
import Select from 'atoms/Select.js'

const OrderHeader = ({ detail, selection }) => (
    <section className="order-header-container">
        <div className="order-header-detail">
            <h2>{detail.name}</h2>
            <p>{detail.address}</p>
            <p>{detail.tel}</p>
        </div>
        <div className="order-header-select">
            <div className="header-select">
                <span className="header-title">Type</span>
                <Select>
                { selection.type.map((type) => <option value={type.value} key={type.value}>{type.title}</option>) }
                </Select>
            </div>
            <div className="separator" />
            <div className="header-select">
                <span className="header-title">Owned By</span>
                <Select>
                { selection.owner.map((owner) => <option value={owner.value} key={owner.value}>{owner.title}</option>) }
                </Select>
            </div>
            <div className="separator" />
            <div className="header-select">
                <span className="header-title">Status</span>
                <Select>
                { selection.status.map((status) => <option value={status.value} key={status.value}>{status.title}</option>) }
                </Select>
            </div>
        </div>
    </section>
)

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

export default OrderHeader