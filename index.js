import React from 'react'
import {render} from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
import 'styles/main.scss'

class App extends React.Component {
  render () {
    return <p> <h1>Hello</h1> Testing <Button bsStyle="success">Simple Button</Button> </p>
  }
}

render(<App/>, document.getElementById('app'))