let product_filter = document.querySelector('.filter__toggle');
let product_filterBody = document.querySelector('.filter__body');
let product_filterBtn = document.querySelector('.filter__btn');
let product_filterResult = document.querySelector('.filter__content');

product_filter.addEventListener('click', function (e) {
    // this.classList.toggle('js-opened');
    // product_filterBody.classList.toggle('js-visible');
    _slideToggle(product_filterBody);
});

let btnText = document.querySelector('.filter__show');

product_filterBtn.addEventListener('click', function (e) {

    product_filterResult.classList.toggle('js-opened');
    if (btnText.innerHTML === 'Показать') {
        btnText.innerHTML = 'Скрыть';
    } else {
        btnText.innerHTML = 'Показать';
    }
});


const choices_element = document.querySelectorAll('.filter__select');

for (let i = 0; i < choices_element.length; i++) {
    const choices = new Choices(choices_element[i], {
        searchEnabled: false,
        position: "bottom",
        itemSelectText: '',
        shouldSort: false,
    });
}


const choices_elementsDisabled = document.querySelectorAll('.select-disabled');

for (let i = 0; i < choices_elementsDisabled.length; i++) {
    const choices_elementDisabled = new Choices(choices_elementsDisabled[i], {})
        .disable();
}

//accordion
var acc = document.querySelectorAll(".accordion");
var u;

for (u = 0; u < acc.length; u++) {
    acc[u].addEventListener("click", function () {
        this.classList.toggle("js-active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//collapse all of accordions in .product__info-tab
let collapse_btn = document.querySelector('.info-tab__control');
let accordions = document.querySelectorAll('.info-tab__body .accordion-content');
let info_acc = document.querySelectorAll('.info-tab__body .accordion');

collapse_btn.addEventListener('click', function (e) {

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].style.maxHeight = null;
        info_acc[i].classList.remove('js-active');
    }
});
