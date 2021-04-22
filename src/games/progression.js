import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const generationProgression = (progressionStart, progressionStep, progressionLength) => {
  const progression = [progressionStart];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getQuestionAndTrueAnswer = () => {
  const question = generationProgression(
    getRandomNumber(1, 10),
    getRandomNumber(1, 3),
    getRandomNumber(5, 10),
  );
  const deleteRandomElement = getRandomNumber(0, question.length - 1);
  const trueAnswer = question.splice(deleteRandomElement, 1, '..');
  return [question.join(' '), String(trueAnswer)];
};

export default () => playGame(description, getQuestionAndTrueAnswer);
