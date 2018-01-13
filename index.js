import React from 'react'
import { render } from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import OrderPage from './src/containers/OrderPage.js'
import 'styles/main.scss'

class App extends React.Component {
  render () {
    return <OrderPage />
  }
}

render(<App/>, document.getElementById('app'))