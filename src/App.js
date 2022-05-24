import React from 'react';
import FibonacciNumber from './components/Fibonacci';
import Spinner from './components/Spinner';
import { calculateFib } from './util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberToGet: 38,
      result: 0,
      showSpinner: false,
    };
  }

  async componentDidMount() {
    this.setState({ fib: await calculateFib(this.state.result) });
    }

  handleClick = async () => {
    this.setState({ result: await calculateFib(this.state.numberToGet) });
  }

  updateNumberToGet = (e) => {
    this.setState({ numberToGet: e.target.value });
  };

  render() {
    const { result } = this.state;

    return (
      <div>
        <h1>The {this.state.numberToGet}th number in the Fibonacci sequence is:</h1>
        {this.state.showSpinner ? <Spinner /> : <FibonacciNumber fibonacciNumber={result} />}
        <div>
          <input value={this.state.numberToGet} onChange={this.updateNumberToGet} />
          <button onClick={this.handleClick}>Get new number!</button>
        </div>
      </div>
    );
  }
}

export default App;
