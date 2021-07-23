const scene = document.getElementById('scene');
const overlay = document.getElementById('overlay');
const modal = document.querySelector('.modal');


const lockScreen = () => {
  document.getElementById('overlay').classList.add('js-active');
  document.body.classList.add('js-locked');
};

const unlockScreen = () => {
  document.getElementById('overlay').classList.remove('js-active');
  document.body.classList.remove('js-locked');
};

const openModal = () => {
  lockScreen();
  modal.classList.add('js-active');
};

const closeModal = () => {
  unlockScreen();
  modal.classList.remove('js-active');
};

const capitalizer = (str) => {
  const newStr = [];
  str.split(' ').forEach(word => {
    newStr.push(word[0].toUpperCase() + word.slice(1));
  });
  return newStr.join(' ');
};


const parallaxInstance = new Parallax(scene);

@@include('files/script.js', {})

