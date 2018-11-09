import React, { Component } from 'react'

import Farewell from '../farewell/Farewell'
import Greeting from '../greeting/Greeting'

const navBarElement = require('./elements/NavBar')

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
          'components' : [
            { 'name': 'Farewell', 'visible': true, 'reference': Farewell },
            { 'name': 'Greeting', 'visible': false, 'reference': Greeting }
          ]
        }

        this.generateNavBar = () => {
            return navBarElement.generate(this)
        }
    }

    render() {
      return (
        <div>  
          <section>
            {this.generateNavBar()}
          </section>  

          <section></section>
        </div>
      );
    }
  }
  
  export default Layout