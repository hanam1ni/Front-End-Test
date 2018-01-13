import React, { Component } from 'react'
import { isNil } from 'lodash'
import { Table } from 'react-bootstrap'

export default class ProductTable extends Component {
    render() {
        const mockColumn = [
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
        const mockData = [
            {
                sku: 'TN SO 000015',
                description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
                brand: 'Schneider Electric',
                listPrice: 'THB 880',
                discount: '30%',
                netPrice: 'THB 660',
                qty: '16',
                total: 'THB 50,079,8823'
            },
            {
                sku: 'TN SO 000015',
                description: 'Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac',
                brand: 'Schneider Electric',
                discount: '30%',
                netPrice: 'THB 660',
                qty: '16',
            }
        ]

        const TableHeader = () => {
            const tableHeaders = mockColumn.map((column) => (column.title))
            return tableHeaders.map((header) => (<th className="table-header">{header}</th>))
        }

        const TableData = () => {
            const tableData = []
            mockData.map((data) => {
                const { sku, description, brand, listPrice, discount, netPrice, qty, total } = data
                const dataRow = []
                // SKU Cell
                dataRow.push(<td className="table-data table-data-sku">{sku}</td>)
                // Description Cell
                dataRow.push(<td className="table-data table-data-description">{description}</td>)
                // Brand Cell
                dataRow.push(<td className="table-data table-data-brand">{brand}</td>)
                // List Price Cell
                isNil(listPrice) ? dataRow.push(<td className="table-data table-data-listPrice"><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-listPrice">{listPrice}</td>)
                // Discount Cell
                dataRow.push(<td className="table-data table-data-discount">{discount}</td>)
                // Net Price Cell
                isNil(netPrice) ? dataRow.push(<td className="table-data table-data-netPrice"><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-netPrice">{netPrice}</td>)
                // Quantity Cell
                dataRow.push(<td className="table-data table-data-qty">{qty}</td>)
                // Total Cell
                isNil(total) ? dataRow.push(<td className="table-data table-data-total"><a>Set Price</a></td>)
                : dataRow.push(<td className="table-data table-data-total">{total}</td>)
                // Remove Item Cell
                dataRow.push(<td className="table-data table-data-last"><a>Remove Item</a></td>)
                tableData.push(<tr>{dataRow}</tr>)
            })
            return tableData
        }

        return <Table condensed  className="product-table">
            <thead>
                <tr>
                    <TableHeader />
                </tr>
            </thead>
            <tbody>
                <TableData />
            </tbody>
        </Table>
    }
}