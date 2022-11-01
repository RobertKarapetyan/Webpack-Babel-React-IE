import React, { Component } from "react";
import Farewell from "../farewell/Farewell";
import Greeting from "../greeting/Greeting";
import Redux from "../redux/Redux";

const navBarElement = require("./NavBar");
const footerElement = require("./Footer");

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: [
        { name: "Greeting", visible: true, reference: Greeting },
        { name: "Redux", visible: false, reference: Redux },
        { name: "Farewell", visible: false, reference: Farewell },
      ],
    };

    this.renderVisibleComponents = () => {
      return this.state.components.map((component) => {
        if (component.visible)
          return (
            <div key={component.name}>
              <component.reference />
            </div>
          );
      });
    };
  }

  render() {
    return (
      <div>
        <div>{navBarElement.generate(this)}</div>
        <div>{this.renderVisibleComponents()}</div>
        <div>{footerElement.generate(this)}</div>
      </div>
    );
  }
}

export default Layout;
