// ==== solving plan
// 1. add event
// 2. after first action ==> stop

const singleUseBtn = document.querySelector('.single-use-btn');
const handler = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', handler);
};

singleUseBtn.addEventListener('click', handler);
