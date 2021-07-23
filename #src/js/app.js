const scene = document.getElementById('scene');
const overlay = document.getElementById('overlay');

const lockScreen = () => {
  document.getElementById('overlay').classList.add('js-active');
  document.body.classList.add('js-locked');
};

const unlockScreen = () => {
  document.getElementById('overlay').classList.remove('js-active');
  document.body.classList.remove('js-locked');
};

const openModal = (modal) => {
  lockScreen();
  modal.classList.add('js-active');
};

const closeModal = (modal) => {
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

const showError = (node) => {
  let timeoutId;
  node.classList.add('error');
  node.classList.add('err-animated');
  timeoutId = setTimeout(() => {
    node.classList.remove('err-animated');
    clearTimeout(timeoutId);
  }, 1000);
}

const removeError = (node) => {
  node.classList.remove('error');
}

const showValid = (node) => {
  node.classList.add('valid');
}

const removeValid = (node) => {
  node.classList.remove('valid');
}


const parallaxInstance = new Parallax(scene);

@@include('files/script.js', {})

