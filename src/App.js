import React from 'react';
import FibonacciNumber from './components/Fibonacci';
import { calculateFib } from './util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberToGet: 38,
      result: calculateFib(38),
    };
  }

  handleClick = () => {
    let result = calculateFib(this.state.numberToGet);
    this.setState({ result: result });
  };

  updateNumberToGet = (e) => {
    this.setState({ numberToGet: e.target.value });
  };

  render() {
    const { result } = this.state;

    return (
      <div>
        <h1>The {this.state.numberToGet}th number in the Fibonacci sequence is:</h1>
        <FibonacciNumber fibonacciNumber={result} />
        <div>
          <input value={this.state.numberToGet} onChange={this.updateNumberToGet} />
          <button onClick={this.handleClick}>Get new number!</button>
        </div>
      </div>
    );
  }
}

export default App;
