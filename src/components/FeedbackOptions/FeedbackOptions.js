import { ButtonContainer, Button } from './FeedbackOptions.styled';
export const OptionsBtn = ({ clickOnGood, clickOnNeutral, clickOnbad }) => {
  return (
    <ButtonContainer>
      <Button type="button" onClick={clickOnGood}>
        Good
      </Button>
      <Button type="button" onClick={clickOnNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={clickOnbad}>
        bad
      </Button>
    </ButtonContainer>
  );
};
