import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 9,
    neutral: 10,
    bad: 15,
  };

  addVote = ({ good, neutral, bad }) => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      };
    });
  };

  getTotalVotesCount = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  getPositiveFeedback = (good, neutral, getTotalVotesCount) => {
    let total = getTotalVotesCount();
    let positiveFeedback = (good + neutral) / total;
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    let positiveFeedback = Math.round(
      this.getPositiveFeedback(good, neutral, this.getTotalVotesCount) * 100
    );
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
          <li>Total: {this.getTotalVotesCount()}</li>
          <li>Positive feedback: {positiveFeedback}%</li>
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
