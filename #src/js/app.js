const scene = document.getElementById('scene');

const lockBody = () => {
  document.querySelector('body').classList.add('js-locked');
};

const unlockBody = () => {
  document.querySelector('body').classList.remove('js-locked');
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

