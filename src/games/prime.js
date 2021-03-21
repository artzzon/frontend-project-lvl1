import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndTrueAnswer = () => {
  const question = getRandomNumber(2, 50);
  const trueAnswer = getPrimeNumber(question);
  return [question, String(trueAnswer)];
};

export default () => gameLogic(description, getQuestionAndTrueAnswer);
