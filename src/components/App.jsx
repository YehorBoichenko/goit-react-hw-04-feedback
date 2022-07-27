import React, { Component } from 'react';
import Statistic from './Statistics/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notifications';
import Feedbacks from './FeedBacks/Feedbacks';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };
  buttonIncrement = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      
      [name]: prevState[name] + 1,
    }));
  };

    countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc,el)=> acc+=el,0)
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) / (this.countTotalFeedback()),
    );
  };
  render() {
    let total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <Section title='Please leave us a feedback'>
          <Feedbacks options={Object.keys(this.state)}
            buttonIncrement={this.buttonIncrement}></Feedbacks>
        </Section>
        <Section title='Review Statistic'>
          {total === 0 ? (<Notification message="No feedback was given" />) : (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positiveStats={this.countPositiveFeedbackPercentage()}
              />
          )}
        </Section>
      </section>
  );
  } 
};

