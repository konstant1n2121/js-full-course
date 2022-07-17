// input: element
// output: empty string

export const clearList = () => {
  const element = document.querySelector('.categories');
  element.innerHTML = '';
};

// clearList();