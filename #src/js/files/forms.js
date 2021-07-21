// TABS
let tabs = document.querySelectorAll('._tabs');
for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let tabs_items = tab.querySelectorAll('._tabs-item');
    let tabs_content = tab.querySelectorAll('._tabs-content');
    for (let i = 0; i < tabs_items.length; i++) {
        let tabs_item = tabs_items[i];
        tabs_item.addEventListener('click', function (e) {
            for (let i = 0; i < tabs_items.length; i++) {
                let tabs_item = tabs_items[i];
                tabs_item.classList.remove('js-active');
                tabs_content[i].classList.remove('js-active');
            }
            tabs_item.classList.add('js-active');
            tabs_content[i].classList.add('js-active');
            shave('.additional__description', 68);
            e.preventDefault();
        });
    }
}

// Also working tabs code
// let tabs_all = document.querySelectorAll('._tabs')
// let btns_all = tabs_all.querySelectorAll('._tabs-item')
// let items_all = tabs_all.querySelectorAll('._tabs-content')
//
// function change(arr, i) {
//     arr.forEach( item => {
//         item.forEach( i => {i.classList.remove('js-active')})
//         item[i].classList.add('js-active')
//     })
// }
//
// for(let i = 0; i < btns_all.length; i++) {
//     btns_all[i].addEventListener('click', () => {
//         change([btns_all, items_all], i)
//     })
// }

//amount or quantity
let amountButtons = document.querySelectorAll('.amount__button');
if (amountButtons.length > 0) {
    for (let i = 0; i < amountButtons.length; i++) {
        const amountButton = amountButtons[i];
        amountButton.addEventListener('click', function(e) {
            let value = parseInt(amountButton.closest('.amount').querySelector('input').value)
            if (amountButton.classList.contains('amount__button--plus')) {
                value ++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            amountButton.closest('.amount').querySelector('input').value = value;
        });
    }
}


