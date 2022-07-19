// === solving plan
// 1. get our class
// 2. add event
// 3. get text from input in console

const inputElem = document.querySelector('.text-input');

inputElem.addEventListener('change', (event) => {
  console.log(event.target.value);
});
