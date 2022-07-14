// input: element
// output: element
// ==== solving plan
// 1. find element with queryselector
// 2. return this element

export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  return console.dir(titleElem);
};

export const getInputElement = () => {
  const inputElem = document.querySelector('text');
  return console.dir(inputElem);
};
