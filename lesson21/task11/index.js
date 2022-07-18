// input: number
// output: squared number

// solving plan
// 1. get class
// 2. get the elements
// 3. squared this elements
// 4. set new attribute

// const squaredNumbers = () => {
//   const listElem = document.querySelectorAll('.number');
//   const arr = Array.from(listElem);
//   arr.map(element => (element.dataset.squareNum = element.dataset.number ** 2));
//   setAttribute('data-squared-number');
// };
// console.log(squaredNumbers());

const squaredNumbers = () => {
  const elements = document.querySelectorAll('.number');
  // const arr = Array.from(listElem);
  return Array.from(elements).map(item => {
    let squareNum = item.dataset.number ** 2;
    item.setAttribute('data-squared-number', squareNum);
  });
};

console.log(squaredNumbers());
