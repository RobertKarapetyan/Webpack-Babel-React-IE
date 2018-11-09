import React, { Component } from 'react'
const greetingHelper = require('./GreetingHelper')

class Greeting extends Component {
    componentDidMount() {
      greetingHelper.helloWorld()
    }

    render() {
      return (
        <div>  
          <p>Hello, World! from Greeting.js</p>
        </div>
      );
    }
  }
  
  export default Greeting;