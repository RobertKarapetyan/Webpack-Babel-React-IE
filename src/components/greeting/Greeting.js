import React, { Component } from 'react'
const greetingHelper = require('./GreetingHelper')

class Greeting extends Component {
    componentDidMount() {
      greetingHelper.helloWorld()
      this.displayProps()
    }

    constructor(props) {
      super(props)

      this.displayProps = () => {
        console.log(this.props)
      }
    }

    render() {
      return (
        <div>  
          <p>Hello, World! from Greeting.js</p>
          <button type="button" className="btn btn-success">Success</button>
          
        </div>
      );
    }
  }
  
  export default Greeting