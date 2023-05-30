import gameEngine from '../gameLogic.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const getProgression = () => {
  let nextProgressionValue = getRandomNumber(0, 101);
  const increase = getRandomNumber(1, 6);
  const result = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    result.push(nextProgressionValue);
    nextProgressionValue += increase;
  }
  return result;
};
const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const hiddenNumber = getRandomNumber(1, lengthOfProgression);
  const expectedAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const anotherGameQuestion = progression.join(' ');
  return [anotherGameQuestion, expectedAnswer];
};
export default () => {
  gameEngine(description, getQuestionAndAnswer);
};