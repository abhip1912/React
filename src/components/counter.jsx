import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <br />
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    // You can return jsx expresssion like <h1>Zero</h1>
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
