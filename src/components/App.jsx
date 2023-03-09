import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { OptionsBtn } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'Section/Section';
import { Notification } from './Notification/Notificatin';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickOnGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    this.countTotalFeedback();
  };
  clickOnNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
    this.countTotalFeedback();
  };
  clickOnbad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
    this.countPositiveFeedbackPercentage();
  };
  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      let totalFeedback = Math.round((prevState.good * 100) / prevState.total);
      return {
        percentage: totalFeedback,
      };
    });
  }
  render() {
    const { good, neutral, bad, total, percentage } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <OptionsBtn
            clickOnGood={this.clickOnGood}
            clickOnNeutral={this.clickOnNeutral}
            clickOnbad={this.clickOnbad}
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
  }
}
