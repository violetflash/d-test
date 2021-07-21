//accordion
var city_acc = document.querySelectorAll(".city-search__toggle");
var m;
let short_list = document.querySelector('.list-to-hide');

for (m = 0; m < city_acc.length; m++) {
    city_acc[m].addEventListener("click", function () {
        this.classList.toggle("js-active");
        short_list.classList.toggle("js-hidden");
        short_list.classList.toggle("list");
        var panel = this.previousElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        // if (panel.style.maxHeight) {
        //     panel.style.maxHeight = null;
        // } else {
        //     panel.style.maxHeight = panel.scrollHeight + "px";
        // }
    });
}


// CITY FILTER by list.js plugin -- DOESNT WORKING WITH NESTED LISTS
var options = {
    valueNames: [ 'city-search__link' ]
};

var userList = new List('city-search', options);