import React, { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import SectionTitle from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCounter = e =>
    this.setState(prevState => {
      const { name } = e.target;
      return { [name]: prevState[name] + 1 };
    });

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.feedbackCounter}
          />
        </SectionTitle>

        {this.countTotalFeedback() > 0 ? (
          <SectionTitle title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </SectionTitle>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default Feedback;
