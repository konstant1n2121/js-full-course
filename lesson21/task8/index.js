// input: string
// output: new element

// === solving plan
// 1. create new element with 'document.createElement'
// 2. add text to new element using textContent

export const createButton = buttonText => {
  const button = document.createElement('button');
  document.body.append(button);
  button.textContent = buttonText;
};

// createButton('Send Mail');
