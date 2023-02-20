import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addVote = evt => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>

        <div>
          <button type="button" onClick={this.addVote}>
            Good
          </button>
          <button type="button" onClick={this.addVote}>
            Neutral
          </button>
          <button type="button" onClick={this.addVote}>
            Bad
          </button>
        </div>

        <h2>Statistics</h2>

        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {good + neutral + bad}</li>
          <li>Positive feedback:</li>
        </ul>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//
//   );
// };
