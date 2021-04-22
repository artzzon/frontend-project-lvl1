import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';

const mathOperation = (firstNumber, mathOperations, secondNumber) => {
  switch (mathOperations) {
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

const getQuestionAndTrueAnswer = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const mathOperations = '+-*';
  const randomMathOperation = mathOperations[getRandomNumber(0, mathOperations.length - 1)];
  const trueAnswer = mathOperation(firstNumber, randomMathOperation, secondNumber);
  const question = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
  return [question, String(trueAnswer)];
};

export default () => playGame(description, getQuestionAndTrueAnswer);
