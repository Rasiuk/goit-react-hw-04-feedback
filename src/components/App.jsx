import { useState, useEffect } from 'react';
import { Statistic } from './Statistic/Statistic';
import { OptionsBtn } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'Section/Section';
import { Notification } from './Notification/Notificatin';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const clickOnGood = () => {
    setGood(prevState => prevState + 1);
  };
  const clickOnNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const clickOnbad = () => {
    setBad(prevState => prevState + 1);
  };
  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);
  useEffect(() => {
    setPercentage(Math.round((good * 100) / total));
  }, [good, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <OptionsBtn
          clickOnGood={clickOnGood}
          clickOnNeutral={clickOnNeutral}
          clickOnbad={clickOnbad}
        />
      </Section>

      <Section title="Statistics">
        {!good && !neutral && !bad ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </div>
  );
};
