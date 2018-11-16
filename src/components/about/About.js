import React, { Component } from 'react'
import './About.css'

class About extends Component {
    render() {
      return (
        <div>  
            <header>
                <hgroup>
                    <h1>Robert Karapetyan</h1>
                    <h2>Biography</h2>
                </hgroup>
            </header>

            <section>
                <article>
                    <p className="LargeFrstLetter">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras sit amet urna dapibus, dapibus magna a, vulputate nunc. 
                    </p>
                </article>
            </section>
        </div>
      );
    }
  }
  
  export default About