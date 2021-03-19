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
  const number = getRandomNumber(1, 10)
  const trueAnswer = getPrimeNumber(number);
  const question = number;
  return [question, trueAnswer.toString()];
};

export default () => gameLogic(description, getQuestionAndTrueAnswer);
