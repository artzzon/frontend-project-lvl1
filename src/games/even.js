import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => question % 2 === 0;

const getQuestionAndTrueAnswer = () => {
  const question = getRandomNumber(1, 100);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => playGame(description, getQuestionAndTrueAnswer);
