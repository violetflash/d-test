// const list = ['JavaScript', 'Kotlin', 'Rust', 'PHP', 'Ruby', 'Java', 'MarkDown', 'Python', 'C++', 'Fortran', 'Assembler'];
// const result = document.getElementById('results');
// const renderResult = list => renderList(list, result);
// const renderFilteredResult = val => renderResult(list.filter(i => (~i.indexOf(e.target.value))));
// const searchHandler = ({target: {value}}) => renderFilteredResult(value);
//
// renderResult(list);
//
// function renderList(list = [], el = document.body) {
//     el.innerHTML = '';
//     list.forEach(i => {
//         let new_el = document.createElement('li');
//         new_el.innerHTML = i;
//         el.appendChild(new_el);
//     })
// }
//
// document.getElementById('search').addEventListener('input', searchHandler);


var map_acc = document.querySelectorAll(".map__btn");
var j;

for (j = 0; j < map_acc.length; j++) {
    map_acc[j].addEventListener("click", function () {
        this.classList.toggle("js-active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// CITY FILTER by list.js plugin -- DOESNT WORKING WITH NESTED LISTS
// var options = {
//     valueNames: [ 'map__link' ],
//     nestedSearch: true
// };
//
// var userList = new List('city-search', options);

