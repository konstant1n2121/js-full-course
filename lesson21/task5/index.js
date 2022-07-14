const setTitle = text => {
  const elem = document.querySelector('.title');
  elem.textContent = text;
};
const result = setTitle('Web Developer');

console.dir(result);
