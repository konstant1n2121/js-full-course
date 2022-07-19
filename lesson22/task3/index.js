// === solving plan
// 1. get class
// 2. add event 'change'

const inputText = document.querySelector('.text-input');
inputText.addEventListener('click', () => {
  console.log(inputText.value);
});
