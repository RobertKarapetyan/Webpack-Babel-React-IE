import React from 'react'

export function generate(_this) {
    return <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {
            _this.state.components.map(component => {
                return <li className="nav-item active" key={component.name}>
                            <a className="nav-link" href="#" id={component.name}
                                onClick={(e) => {
                                    console.log(`here`)
                                }}>
                                {component.name}
                            </a>
                        </li>
            })
        }
        <div className="navbar-collapse" />
        <ul className="navbar-nav">
            <a>Sign Out</a>
        </ul>
    </nav> 
}