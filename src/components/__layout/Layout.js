import React, { Component } from 'react'
import Farewell from '../farewell/Farewell'
import Greeting from '../greeting/Greeting'

const navBarElement = require('./elements/NavBar')
const footerElement = require('./elements/Footer')

require('./Layout.css')

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
          'components' : [
            { 'name': 'Farewell', 'visible': false, 'reference': Farewell },
            { 'name': 'Greeting', 'visible': true, 'reference': Greeting }
          ]
        }

        this.renderVisibleComponents = () => {
          return this.state.components.map(component => {
                    if (component.visible)
                        return <div key={component.name} ><component.reference /></div>
                })
        }
    }

    render() {
      return (
        <div>  
          <section>
            {navBarElement.generate(this)}
          </section>  
          <section className='pad15pxFromLeft pad15pxFromTop'>
            {this.renderVisibleComponents()}
          </section>  
          <section>
            {footerElement.generate(this)}
          </section>
        </div>
      );
    }
  }
  
  export default Layout