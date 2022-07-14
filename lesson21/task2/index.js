// input: element
// output: element
// ==== solving plan
// 1. find element with queryselector
// 2. return this element

export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

export const getInputElement = () => {
  const inputElem = document.querySelector('input[type = "text"]');
  console.dir(inputElem);
  return inputElem;
};
