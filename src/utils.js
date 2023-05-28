export const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  };
  
  export const isEvenNumber = (number) => number % 2 === 0;