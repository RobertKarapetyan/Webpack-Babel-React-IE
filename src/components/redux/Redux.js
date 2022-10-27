import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./actions/Increment";
import { decrement } from "./actions/Decrement";

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (number) => dispatch(increment(number)),
    decrement: (number) => dispatch(decrement(number)),
  };
};

class Redux extends Component {
  render() {
    return (
      <div>
        <h3 style={{ margin: 10 }}>Counter: {this.props.counter}</h3>
        <button
          style={{ marginLeft: 10 }}
          type="button"
          className="btn btn-primary"
          onClick={(_) => {
            this.props.increment(1);
          }}
        >
          +
        </button>
        <button
          style={{ marginLeft: 10 }}
          type="button"
          className="btn btn-danger"
          onClick={(_) => {
            this.props.decrement(1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
