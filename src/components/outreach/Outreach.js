import React, { Component } from 'react'

const webApiClient = require('../../webApiClient/WebApiClient')

class Outreach extends Component {
    componentDidMount() {
      webApiClient.fetchFilters().then(filters => {
        console.log(filters)
      })
    }

    render() {
      return (
        <div>  
          <p>Hello! from Outreach.js</p>
          <button type="button" className="btn btn-success">Success</button>  
        </div>
      );
    }
  }
  
  export default Outreach