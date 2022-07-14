// input: element
// output: element
// ==== solving plan
// 1. find element with queryselector
// 2. return this element

const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  return console.dir(titleElem);
};

const getInputElement = () => {
  const inputElem = document.querySelector('text');
  return console.dir(inputElem);
};
