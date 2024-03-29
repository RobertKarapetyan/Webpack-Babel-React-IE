import React from "react";

export function generate(_this) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        {_this.state.components.map((component) => {
          let style = null;
          if (component.visible) {
            style = { fontWeight: "bold" };
          }

          return (
            <li className="nav-item active" key={component.name}>
              <a
                style={style}
                className="nav-link"
                href="#"
                id={component.name}
                onClick={(e) => {
                  _this.setState({
                    components: _this.state.components.map((element) => {
                      element.visible =
                        element.name == component.name ? true : false;
                      return element;
                    }),
                  });
                }}
              >
                {component.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
