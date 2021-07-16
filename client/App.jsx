import React, { Component } from 'react';
import Shoutout from './Shoutout.jsx';

class App extends Component {
  constructor() {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/api/shoutout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          shoutoutList: [...data.rows],
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { shoutoutList } = this.state;
    const shoutoutElems = shoutoutList.map((shoutout) => (
      <Shoutout
        key={shoutout._id}
        contents={shoutout.contents}
        senderId={shoutout.sender_id}
        recipientId={shoutout.recipient_id}
        timstamp={shoutout.timestamp}
      />
    ));
    return (
      <div>
        <form>
          <input type="textbox" />
          <button type="submit">Post Shoutout!</button>
        </form>
        {shoutoutElems}
      </div>
    );
  }
}

export default App;
