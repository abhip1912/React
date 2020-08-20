import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncrement = (prevCount) => {
    this.setState({ count: prevCount + 1 });
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.handleIncrement(this.state.count)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // You can return jsx expresssion like <h1>Zero</h1>
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
