// input: attributes
// output: new attributes

// === task solving plan
// 1. find elements with querySelector
// 2. create new form for input
// 3. set new value for elements

export const finishForm = () => {
  const loginElements = document.querySelector('.login-form');
  const inputElements = document.querySelector('input[type="text"]');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login');
  loginElements.prepend(input);
  inputElements.setAttribute('type', 'password');
};

// finishForm();
