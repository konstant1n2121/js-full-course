// // input:  string
// // output: new string

const setButton = buttonText => {
  document.querySelector('body');
  const button = document.createElement('button');
  button.textContent = buttonText;
  document.body.append(button);
};
setButton('Some text');
