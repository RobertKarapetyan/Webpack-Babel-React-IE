import React from 'react'

export function generate(_this) {
    return <section>
                <div className="container body-content">
                    <hr />
                    <footer>
                        <p>&copy; {new Date().toDateString()} - Some Application</p>
                    </footer>
                </div>
            </section> 
}
