import React from "react";

export function generate(_this) {
  return (
    <section>
      <div className="container-fluid">
        <hr />
        <footer>
          <p>&copy; {new Date().toDateString()} - React Playground</p>
        </footer>
      </div>
    </section>
  );
}
