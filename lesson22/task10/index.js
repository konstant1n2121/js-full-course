// == solving plan
// 1. get all classes
// 2. add events for classes
// 2.1 function should read data from attributes
// 3. on click  get data from attributes in console

const paginationElem = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.getAttribute('data-page-number'));
};

paginationElem.forEach(elem => {
  elem.addEventListener('click', handleClick);
});
