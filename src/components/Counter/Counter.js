import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    document.title = `le compteur est a ${this.state.counter}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      document.title = `le compteur est a ${this.state.counter}`;
    }
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>Increment +</button>
        <button onClick={this.decrement}>Decrement -</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
