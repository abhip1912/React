import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };
  // styles = {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // };
  render() {
    return (
      // <React.Fragment>
      <div>
        {/* <img src={this.state.imageUrl} alt="RandomPic" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2"> */}
        <span style={{ fontSize: 20 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    // You can return jsx expresssion like <h1>Zero</h1>
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
