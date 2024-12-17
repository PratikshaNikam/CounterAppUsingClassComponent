import React from "react";

export default class CounterApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    
    this.increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    this.decrement = () => {
      this.setState({ count:this.state.count - 1 });
    };


      return (
        <div>
          <h1>Counter App</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      );
    }

  }

  

