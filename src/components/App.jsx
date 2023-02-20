import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>

        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>

        <h2>Statistics</h2>

        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>

        <p>Total:</p>
        <p>Posistive feedback:</p>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//
//   );
// };
