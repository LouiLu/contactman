import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log('component will mount');
  //   }

  //   componentDidUpdate() {
  //     console.log('component did updates');
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log('component will receive props');
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Title: {title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
