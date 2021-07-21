let buttons_openSearch = document.querySelectorAll('.top-panel__search-btn');
let forms_SearchForm = document.querySelectorAll('.top-panel__form');
let search_input = document.getElementById('mobile-search');

for (let i = 0; i < buttons_openSearch.length; i++) {
    const btn_openSearch = buttons_openSearch[i];
    btn_openSearch.addEventListener('click', function(e) {
        this.classList.toggle("js-active");
        forms_SearchForm[i].classList.toggle("js-opened");
    });
}


// Burger menu
let burger = document.querySelector('.burger');
let burger_box = document.querySelector('.top-panel__menu');
let mobile_menu = document.querySelector('.mobile-menu__content');
let body = document.querySelector('body')

burger.addEventListener('click', function(e) {
    this.classList.toggle('js-to-angle');
    body.classList.toggle('js-overflow')
    burger_box.classList.toggle('js-active');
    mobile_menu.classList.toggle('js-opened');
});

let mob_drop_btns = document.querySelectorAll('.mobile-menu__dropdown-btn');
let mob_list = document.querySelectorAll('.mobile-menu__list--dropdown');
// let mob_list_main = document.querySelector('.mobile-menu__list--main');

for (let i = 0; i < mob_drop_btns.length; i++) {
    const mob_btn = mob_drop_btns[i];

    mob_btn.addEventListener('click', function(e) {
        this.classList.toggle('js-active')
        mob_list[i].classList.toggle('js-opened');
        // mob_list_main.classList.toggle('js-active');
    });
}