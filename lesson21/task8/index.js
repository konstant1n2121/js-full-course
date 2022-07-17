// input: elements
// output: new elements

// ==== task solving plan
// 1. find elements on the page (querySelector)
// 2. create new elements
// 3. add new elements on the page using(append, prepend, before, after)

 export const finishList = () => {
  const listElement = document.querySelector('.list');
  const specialListElem = document.querySelector('.special');

  const firstElem = document.createElement('li');
  const fourthElem = document.createElement('li');
  const sixthElem = document.createElement('li');
  const eightElem = document.createElement('li');

  firstElem.textContent = '1';
  fourthElem.textContent = '4';
  sixthElem.textContent = '6';
  eightElem.textContent = '8';

  listElement.prepend(firstElem);
  specialListElem.before(fourthElem);
  listElement.append(eightElem);
  specialListElem.after(sixthElem);
};

finishList();
