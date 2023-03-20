import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = { 
    good: 0,
    neutral: 0,
    bad: 0
  } 
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good *100)/total);
  }

  render() { 
    const { good, neutral, bad } = this.state
    const total = good +neutral + bad
    return (
      <>
        <Section title="Please leave feedback" />
        
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
 

