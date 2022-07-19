// === solving plan
// 1. add event for class elem
// 2. if checked === true, not checked ===> false

const taskStatus = document.querySelector('.task-status');
taskStatus.addEventListener('change', () => {
  console.log(taskStatus.checked);
});
