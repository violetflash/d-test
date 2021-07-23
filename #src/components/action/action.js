const talkBtn = document.querySelector('.action__btn');
const overlay = document.getElementById('overlay');

const talkBtnHandler = () => {
  lockBody();
  overlay.style.display = 'flex';
};

talkBtn.addEventListener('click', talkBtnHandler);
