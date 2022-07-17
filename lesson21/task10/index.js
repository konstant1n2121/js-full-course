// === task solving plan

// 1. find our classes
// 2. using methods change the classes

const manageClasses = () => {
  const firstClass = document.querySelector('.one');
  const secondClass = document.querySelector('.two');
  const thirdClass = document.querySelector('.three');
  const fourthClass = document.querySelector('.four');

  firstClass.classList.add('selected');
  secondClass.classList.remove('selected');
  thirdClass.classList.toggle('three_done');
  if (fourthClass.classList.contains('some-class')) {
    fourthClass.classList.add('another-class');
  }
};

manageClasses();
