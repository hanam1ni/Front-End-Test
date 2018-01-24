import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'; 
import classNames from 'classnames';
import Svg from 'react-inlinesvg';
import { isNil, debounce } from 'lodash'
import { InputGroup, FormControl, Table, Panel } from 'react-bootstrap';
import Button from 'atoms/Button'
import Input from 'atoms/Input'
import addIcon from 'statics/icons/icon_plus.svg'

export default class AddProductInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formFocus: false,
            formOnChange: false,
        };
        this.handleOnChangeTimeout = debounce(() => { 
            this.setState({
                formOnChange: false
            })
        }, 400)
    }

    handleOnChange() {
        this.setState({
            formOnChange: true
        })
        this.handleOnChangeTimeout()
    }

    handleOnFocus() {
        this.setState({
            formFocus: true
        })
    }

    handleOffFocus() {
        this.setState({
            formFocus: false
        })
    }

    render () {
        const { formFocus, formOnChange } = this.state
        const { stretch, placeholder, productData } = this.props
        const InputGroupClass = classNames("add-product-input", { "stretch":stretch })
        const Desktop = (props) => (<MediaQuery  {...props} minDeviceWidth={769} />)
        const ProductTable = (productData) => [
            <div className="page-mask" onClick={() => this.handleOffFocus()}/>,
            <Panel className="table-border">
                <Table condensed className="product-table" >
                    <tbody>
                    {productData.map((product) => (
                        <tr>
                            <td className="table-data">{product.sku}</td>
                            <td className="table-data">{product.description}</td>
                            <td className="table-data">{product.brand}</td>
                            {isNil(product.listPrice) ? <td className="table-data"><a>Set Price</a></td> : <td className="table-data">THB {product.listPrice.toLocaleString()}</td>}
                            <td className="table-data table-button"><Input styleclass="qty-input" defaultValue={1}/><Button styleclass="add-button">Add</Button></td>
                        </tr>
                    )) }
                    </tbody>
                </Table> 
            </Panel>
        ]
        
        return (
            <InputGroup className={InputGroupClass}>
                { formOnChange ? 
                    <div className="loader" /> :
                    <Svg src={addIcon} className={classNames({ "active":formFocus })} />
                }
                <FormControl 
                    type="text"
                    placeholder={placeholder} 
                    onChange={() => this.handleOnChange()}
                    onFocus={() => this.handleOnFocus()}
                />
                <Desktop>{ formFocus && ProductTable(productData) }</Desktop>
            </InputGroup>
        )
    }
}

AddProductInput.propTypes = {
    placeholder: PropTypes.string,
    stretch: PropTypes.bool
}

AddProductInput.defaultProps = {
    placeholder: '',
    stretch: false
}