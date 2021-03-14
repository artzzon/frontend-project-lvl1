import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndTrueAnswer = () => {
  let firstNumber = getRandomNumber(1, 54);
  let secondNumber = getRandomNumber(1, 54);
  const question = `${firstNumber} ${secondNumber}`;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const trueAnswer = firstNumber + secondNumber;
  return [question, trueAnswer.toString()];
};

export default () => gameLogic(description, getQuestionAndTrueAnswer);
