import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", 23],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags !</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return <div>{this.renderTags()}</div>;
  }
}

export default Counter;
