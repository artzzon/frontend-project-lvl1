import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndTrueAnswer = () => {
  const question = getRandomNumber(2, 50);
  const trueAnswer = isPrimeNumber(question);
  return [question, String(trueAnswer ? 'yes' : 'no')];
};

export default () => playGame(description, getQuestionAndTrueAnswer);
