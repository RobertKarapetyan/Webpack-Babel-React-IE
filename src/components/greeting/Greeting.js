import React, { Component } from "react";
import Comment from "./Comment";
import Example from "./Example";

class Greeting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={{ margin: 10 }}>
          {/* <MainPage /> */}
          <Example />
        </div>
      </div>
    );
  }
}

function Welcome(props) {
  return <h3>Hello, {props.name}</h3>;
}

function MainPage() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  };

  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default Greeting;
