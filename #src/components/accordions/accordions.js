// let acc_links = document.querySelectorAll('.accordions__link');
//
// for (let i = 0; i < acc_links.length; i++) {
//     let acc_link = acc_links[i];
//
//     acc_link.addEventListener('click', function(e) {
//         for (let j = 0; j < acc_links.length; j++) {
//             acc_links[j].classList.remove('js-active');
//         }
//         acc_link.classList.add('js-active');
//     });
// }

//STICKY ASSIDE NAV
var sidebar = new StickySidebar('.accordions__aside', {
    topSpacing: 0,
    bottomSpacing: 0,
    containerSelector: '.accordions',
    innerWrapperSelector: '.accordions__nav'
});

//accordion
var acc_all = document.querySelectorAll(".accordions__btn");
var k;

for (k = 0; k < acc_all.length; k++) {
    acc_all[k].addEventListener("click", function () {
        this.classList.toggle("js-active");
        var panel = this.nextElementSibling;
        if (panel.classList.contains('js-opened')) {
            panel.style.maxHeight = '0';
            panel.classList.remove('js-opened');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add('js-opened');
        }

        // if (panel.style.maxHeight) {
        //     panel.style.maxHeight = null;
        // } else {
        //     panel.style.maxHeight = panel.scrollHeight + "px";
        // }
    });
}

// //collapse all of accordions in .product__info-tab
// let collapse_btn = document.querySelector('.info-tab__control');
// let accordions = document.querySelectorAll('.info-tab__body .accordion-content');
// let info_acc = document.querySelectorAll('.info-tab__body .accordion');
//
// collapse_btn.addEventListener('click', function (e) {
//
//     for (let i = 0; i < accordions.length; i++) {
//         accordions[i].style.maxHeight = null;
//         info_acc[i].classList.remove('js-active');
//     }
// });