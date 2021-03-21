import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const generationProgression = () => {
  const progressionLength = 10;
  const progressionStep = getRandomNumber(2, 9);
  const progression = [];
  for (let i = 0, j = getRandomNumber(1, 9); i < progressionLength; i += 1, j += progressionStep) {
    progression.push(j);
  }
  return progression;
};

const getQuestionAndTrueAnswer = () => {
  const question = generationProgression();
  const deleteRandomElement = getRandomNumber(0, question.length - 1);
  const trueAnswer = question.splice(deleteRandomElement, 1, '..');
  return [question.join(' '), String(trueAnswer)];
};

export default () => gameLogic(description, getQuestionAndTrueAnswer);
