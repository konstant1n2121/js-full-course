export const getTitle = () => {
  const elements = document.querySelector('.title');
  const text = elements.textContent;
  return text;
};

// =============

export const getDescription = () => {
  const element = document.querySelector('.about');
  const text = element.innerText;
  return text;
};

// =============

export const getPlans = () => {
  const elem = document.querySelector('.plans');
  const html = elem.innerHTML;
  return html;
};

// =============

export const getGoal = () => {
  const element = document.querySelector('.goal');
  const html = element.outerHTML;
  return html;
};
