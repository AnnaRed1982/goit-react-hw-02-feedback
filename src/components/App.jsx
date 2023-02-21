import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

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
    let positivePercentage;

    total === 0
      ? (positivePercentage = 0)
      : (positivePercentage = (good + neutral) / total);

    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    let total = this.countTotalFeedback();

    let positivePercentage = Math.round(
      this.countPositiveFeedbackPercentage(
        good,
        neutral,
        this.countTotalFeedback
      ) * 100
    );

    return (
      <div>
        <Section title="Please leave feedback">
          
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addVote}
          ></FeedbackOptions>

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

//  <div>
//   <h1>Please leave feedback</h1>

//   <div>
//     <button type="button" id="good" onClick={() => this.addVote('good')}>
//       Good
//     </button>
//     <button
//       type="button"
//       id="neutral"
//       onClick={() => this.addVote('neutral')}
//     >
//       Neutral
//     </button>
//     <button type="button" id="bad" onClick={() => this.addVote('bad')}>
//       Bad
//     </button>
//   </div>

//   <h2>Statistics</h2>

//   <ul>
//     <li>Good: {good}</li>
//     <li>Neutral: {neutral}</li>
//     <li>Bad: {bad}</li>
//     <li>Total: {total}</li>
//     <li>Positive feedback: {positivePercentage}%</li>
//   </ul>
// </div>
