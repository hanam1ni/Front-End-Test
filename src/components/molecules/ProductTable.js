import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import { isNil } from 'lodash'
import { Table } from 'react-bootstrap'

export default class ProductTable extends Component {

    render() {
        const { tableData } = this.props
        const tableColumn = [
            {
                title: 'SKU',
                data: 'sku'
            },
            {
                title: 'DESCRIPTION',
                data: 'description'
            },
            {
                title: 'BRAND',
                data: 'brand'
            },
            {
                title: 'LIST PRICE',
                data: 'listPrice',
            },
            {
                title: 'DISCOUNT',
                data: 'discount'
            },
            {
                title: 'NET PRICE',
                data: 'netPrice',
            },
            {
                title: 'QTY',
                data: 'qty',
            },
            {
                title: 'TOTAL',
                data: 'total',
                type: 'price',
            },
            {
                title: ' ',
            }
        ]

        const TableHeader = () => {
            const tableHeaders = tableColumn.map((column) => (column.title))
            return tableHeaders.map((header) => (<th className="table-header" key={header}>{header}</th>))
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
                : dataRow.push(<td className="table-data table-data-listPrice" key={`${listPrice}${index}`} >{listPrice}</td>)
                // Discount Cell
                dataRow.push(<td className="table-data table-data-discount" key={`${discount}${index}`} >{discount}</td>)
                // Net Price Cell
                isNil(netPrice) ? dataRow.push(<td className="table-data table-data-netPrice" key={`netPrice${index}`} ><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-netPrice" key={`${netPrice}${index}`} >{netPrice}</td>)
                // Quantity Cell
                dataRow.push(<td className="table-data table-data-qty" key={`${qty}${index}`} >{qty} <a><img src="icons/icon_edit.svg" className="edit-icon"/></a></td>)
                // Total Cell
                isNil(total) ? dataRow.push(<td className="table-data table-data-total" key={`total${index}`} ><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-total" key={`${total}${index}`} >{total}</td>)
                // Remove Item Cell
                dataRow.push(<td className="table-data table-data-last" key={`Last${index}`} ><a>Remove Item</a></td>)
                return <tr key={`${sku}-${brand}${index}`}>{dataRow}</tr>
            })
        }

        return <Table condensed className="product-table">
            <thead>
                <tr>
                    <TableHeader />
                </tr>
            </thead>
            <tbody>
                <TableContent />
            </tbody>
        </Table>
    }
}

ProductTable.propTypes = {
    tableData: PropTypes.array
}

ProductTable.defaultProps = {
    tabledata: []
}
