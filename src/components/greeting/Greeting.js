import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3 style={{ margin: 10 }}>Greeting!</h3>
      </div>
    );
  }
}

export default Greeting;
