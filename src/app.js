import React, { Component } from 'react'
const greeting = require('./greeting')

class App extends Component {
    componentDidMount() {
        greeting.helloWorld()
    }

    render() {
      return (
        <div>  
          <p>Hello, World!</p>
        </div>
      );
    }
  }
  
  export default App;