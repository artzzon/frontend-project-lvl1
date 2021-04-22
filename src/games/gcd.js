import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let firstNumber = num1;
  let secondNumber = num2;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 14);
  const secondNumber = getRandomNumber(1, 14);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  return [question, String(answer)];
};

export default () => playGame(description, getQuestionAndAnswer);
