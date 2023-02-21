import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addVote = vote => {
    this.setState(prevState => {
      if (vote === 'good') {
        return { good: prevState.good + 1 };
      }
      if (vote === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (vote === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = (good, neutral, countTotalFeedback) => {
    let total = countTotalFeedback();
    let positiveFeedback;

    total === 0
      ? (positiveFeedback = 0)
      : (positiveFeedback = (good + neutral) / total);

    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;

    let positiveFeedback = Math.round(
      this.countPositiveFeedbackPercentage(good, neutral, this.countTotalFeedback) * 100
    );

    return (
      <div>
        <h1>Please leave feedback</h1>

        <div>
          <button type="button" id="good" onClick={() => this.addVote('good')}>
            Good
          </button>
          <button
            type="button"
            id="neutral"
            onClick={() => this.addVote('neutral')}
          >
            Neutral
          </button>
          <button type="button" id="bad" onClick={() => this.addVote('bad')}>
            Bad
          </button>
        </div>

        <h2>Statistics</h2>

        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
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
