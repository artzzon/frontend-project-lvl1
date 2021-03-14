import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What is the result of the expression?';
const getQuestionAndTrueAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const mathOperations = ['+', '-', '*'];
  const randomMathOperation = mathOperations[Math.floor(Math.random() * mathOperations.length)];
  const trueAnswer = eval(firstNumber + randomMathOperation + secondNumber);
  const question = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
  console.log([firstNumber, secondNumber]);
  return [question, String(trueAnswer)];
};

export default () => gameLogic(description, getQuestionAndTrueAnswer);
