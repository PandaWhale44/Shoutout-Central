import React, { Component } from 'react';

class Shoutout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shoutout">
        <div>{this.props.key}</div>
        <div>{this.props.contents}</div>
        <div>{this.props.senderId}</div>
        <div>{this.props.recipientId}</div>
        <div>{this.props.timestamp}</div>
      </div>
    );
  }
}

export default Shoutout;
