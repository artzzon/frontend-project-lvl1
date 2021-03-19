import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';

const getQuestionAndTrueAnswer = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const mathOperations = ['+', '-', '*'];
  const randomMathOperation = mathOperations[Math.floor(Math.random() * mathOperations.length)];
  const trueAnswer = eval(firstNumber + randomMathOperation + secondNumber);
  const question = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
  return [question, trueAnswer.toString()];
};

export default () => gameLogic(description, getQuestionAndTrueAnswer);
