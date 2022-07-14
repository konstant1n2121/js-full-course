// input: elements
// output: array

export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

export const getItemsArray = () => {
  const elemList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elemList);
  console.dir(elementsArray);
  return elementsArray;
};
