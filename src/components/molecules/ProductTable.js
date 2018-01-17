import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import { isNil } from 'lodash'
import { Table, Panel } from 'react-bootstrap'
import Select from 'atoms/Select.js'
import MediaQuery from 'react-responsive'

export default class ProductTable extends Component {
    render() {
        const Desktop = (props) => (<MediaQuery  {...props} minDeviceWidth={769} />)
        const Mobile = (props) => (<MediaQuery  {...props} maxDeviceWidth={768} />)
        const { tableData } = this.props
        const TableHeader = () => {
            return [
                <th className="table-header">
                    <Desktop>
                        <Select styleClass="table-select">
                            <option value="sku">SKU</option>
                            <option value="brand">BRAND</option>
                        </Select>
                    </Desktop>
                    <Mobile>
                        SKU
                    </Mobile>
                </th>,
                <th className="table-header">DESCRIPTION</th>,
                <th className="table-header">BRAND</th>,
                <th className="table-header">LIST PRICE</th>,
                <th className="table-header">DISCOUNT</th>,
                <th className="table-header">NET PRICE</th>,
                <th className="table-header">QTY</th>,
                <th className="table-header">TOTAL</th>,
                <th className="table-header"> </th>,
            ]
        }

        const TableContent = () => {
            return tableData.map((data, index) => {
                const { sku, description, brand, listPrice, discount, netPrice, qty, total } = data
                const dataRow = []
                // SKU Cell
                dataRow.push(<td className="table-data table-data-sku" key={`${sku}${index}`} >{sku}</td>)
                // Description Cell
                dataRow.push(<td className="table-data table-data-description" key={`${description}${index}`} >{description}</td>)
                // Brand Cell
                dataRow.push(<td className="table-data table-data-brand" key={`${brand}${index}`} >{brand}</td>)
                // List Price Cell
                isNil(listPrice) ? dataRow.push(<td className="table-data table-data-listPrice" key={`setPrice${index}`} ><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-listPrice" key={`${listPrice}${index}`} >THB {listPrice.toLocaleString()}</td>)
                // Discount Cell
                dataRow.push(<td className="table-data table-data-discount" key={`${discount}${index}`} >{discount} %</td>)
                // Net Price Cell
                isNil(netPrice) ? dataRow.push(<td className="table-data table-data-netPrice" key={`netPrice${index}`} ><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-netPrice" key={`${netPrice}${index}`} >THB {netPrice.toLocaleString()}</td>)
                // Quantity Cell
                dataRow.push(<td className="table-data table-data-qty" key={`${qty}${index}`} >{qty} <a><img src="icons/icon_edit.svg" className="edit-icon"/></a></td>)
                // Total Cell
                isNil(total) ? dataRow.push(<td className="table-data table-data-total" key={`total${index}`} ><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-total" key={`${total}${index}`} >THB {total.toLocaleString()}</td>)
                // Remove Item Cell
                dataRow.push(<td className="table-data table-data-last" key={`Last${index}`} ><a>Remove Item</a></td>)
                return <tr key={`${sku}-${brand}${index}`}>{dataRow}</tr>
            })
        }

        return (
            <Panel className="table-border">
                <Table condensed className="product-table" responsive>
                    <thead>
                        <tr>
                            <TableHeader />
                        </tr>
                    </thead>
                    <tbody>
                        <TableContent />
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

ProductTable.propTypes = {
    tableData: PropTypes.array
}

ProductTable.defaultProps = {
    tabledata: []
}
