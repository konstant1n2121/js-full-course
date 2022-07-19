const taskStatus = document.querySelector('.task-status');
taskStatus.addEventListener('change', event => {
  console.log(event.target.checked);
});
