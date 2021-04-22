import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';

const mathOperation = (firstNumber, mathOperation, secondNumber) => {
  switch (mathOperation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const mathSigns = '+-*';
  const randomMathOperation = mathSigns[getRandomNumber(0, mathSigns.length - 1)];
  const answer = mathOperation(firstNumber, randomMathOperation, secondNumber);
  const question = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
  return [question, String(answer)];
};

export default () => playGame(description, getQuestionAndAnswer);
