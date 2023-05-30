import gameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const anotherGameQuestion = getRandomNumber(2, 100);
  const expectedAnswer = isPrime(anotherGameQuestion) ? 'yes' : 'no';
  return [anotherGameQuestion, expectedAnswer];
};
export default () => {
  gameEngine(description, getQuestionAndAnswer);
};