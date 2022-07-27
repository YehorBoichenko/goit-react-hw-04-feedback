import { useState } from 'react';
import Statistic from './Statistics/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notifications';
import Feedbacks from './FeedBacks/Feedbacks';

export default function Component() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setState = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / countTotalFeedback());
  };

  let total = countTotalFeedback();

  return (
    <section>
      <Section title="Please leave us a feedback">
        <Feedbacks
          options={['good', 'neutral', 'bad']}
          buttonIncrement={setState}
        ></Feedbacks>
      </Section>
      <Section title="Review Statistic">
        {total === 0 ? (
          <Notification message="No feedback was given" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveStats={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </section>
  );
}
