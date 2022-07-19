const eventBtn = document.querySelectorAll('.btn');

const handleClick = event => {
  console.log(event.target.textContent);
};

eventBtn.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

