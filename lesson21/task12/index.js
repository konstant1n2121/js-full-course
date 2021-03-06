// input: number
// output: attribute value(string)

export const getSection = num => {
  const element = document.querySelector(`span[data-number="${num}"]`);
  return element.closest('.box').dataset.section;
};

// console.log(getSection(3));
