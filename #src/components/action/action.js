const talkBtn = document.querySelector('.action__btn');

const talkBtnHandler = () => {
    openModal(modal);
    hidePreloader();
};

talkBtn.addEventListener('click', talkBtnHandler);
