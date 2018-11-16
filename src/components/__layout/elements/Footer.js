import React from 'react'

export function generate(_this) {
    return <section>
                <br/>
                <div className="container-fluid">
                    <hr />
                    <footer>
                        <p>&copy; {new Date().toDateString()} - Some Application</p>
                    </footer>
                </div>
            </section> 
}
