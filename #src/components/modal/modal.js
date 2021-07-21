const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});


//Поле ввода времени звонка становится активным после активации нужной радиокнопки
let timeCall = document.querySelector('.js-time');
let timeCall_msg = document.querySelector('.request__time .request__textarea');
let checkbox_time = document.querySelectorAll('.request__options .checkbox__input');

for (let i = 0; i < checkbox_time.length; i++) {
    checkbox_time[i].addEventListener('click', function(e) {
        timeCall_msg.disabled = !timeCall.checked;
    });
}

