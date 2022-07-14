export const setTitle = text => {
  const element = document.querySelector('.title');
  element.textContent = text;
};

setTitle('Web Developer');
