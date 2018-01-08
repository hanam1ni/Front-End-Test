import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
export default class ProductTable extends Component {
    render() {
        const MockColumn = [
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
                data: 'listPrice'
            },
            {
                title: 'DISCOUNT',
                data: 'discount'
            },
            {
                title: 'NET PRICE',
                data: 'netPrice'
            },
            {
                title: 'QTY',
                data: 'qty',
            },
            {
                title: 'TOTAL',
                data: 'total'
            },
            {
                title: ' ',
            }
        ]
        const MockData = [
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
                listPrice: 'THB 880',
                discount: '30%',
                netPrice: 'THB 660',
                qty: '16',
                total: 'THB 50,079,8823'
            }
        ]

        const ColumnOrder = MockColumn.map((column) => (column.data))

        const TableHeader = () => {
            const tableHeaders = ['SKU', 'DESCRIPTION', 'BRAND', 'LIST PRICE', 'DISCOUNT', 'NET PRICE', 'QTY', 'TOTAL', ' '] 
            return tableHeaders.map((header) => (<th className="table-header">{header}</th>))
        }

        const TableData = () => {
            const tableData = []
            MockData.map((data) => {
                const dataKeys = Object.keys(data)
                const dataCells = []
                ColumnOrder.map((order) => {
                    const cellClass = `table-data table-data-${order}`
                    if (dataKeys.includes(order)) dataCells.push(<td className={cellClass}>{data[order]}</td>)
                })
                dataCells.push(<td className="table-data table-data-last"><a>Remove Item</a></td>)
                tableData.push(<tr>{dataCells}</tr>)
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