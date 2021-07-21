// const getOffset = (element, horizontal = false) => {
//     if(!element) return 0;
//     return getOffset(element.offsetParent, horizontal) + (horizontal ? element.offsetLeft : element.offsetTop);
// }
//
// let bar_block = document.querySelector('.bar');
//
// window.addEventListener('scroll', onScroll);
// window.addEventListener('touchmove', onScroll);
// window.onscroll = function () {
//     onScroll()
// };
//
// function onScroll() {
//     console.log(getOffset(bar_block))
//     console.log(window.pageYOffset)
// }
// fixed bar
window.addEventListener('scroll', onScroll);
window.addEventListener('touchmove', onScroll);
window.onscroll = function () {
    onScroll()
};

function onScroll() {
    let bar_line = document.getElementById('bar-line');
    let bar_block = document.querySelector('.bar');
    // let bar_block_bottom = bar_block.offsetTop + bar_block.offsetHeight;
    let bar_block_bottom = bar_block.offsetTop + bar_block.offsetHeight - window.innerHeight;
    console.log(window.innerHeight)
    console.log(bar_block_bottom)
    console.log(window.pageYOffset)
    if  ((window.pageYOffset > 500) && (window.pageYOffset < bar_block_bottom)) {
        bar_line.classList.add('js-fixed');
    } else {
        bar_line.classList.remove('js-fixed');
    }
    // if (window.pageYOffset >= bar_block.offsetTop) {
    //     console.log('HERE')
    // }

    // while (window.pageYOffset !== bar_line_bottom) {
    // if ((window.pageYOffset > 500) && (window.pageYOffset !== bar_block.offsetTop)) {
    //     bar_line.classList.add('js-fixed');
    // } else {
    //     bar_line.classList.remove('js-fixed');
    //     // break
    // }


    // }


}

// else if ( window.pageYOffset < 500 ) {
//     bar.classList.remove('js-fixed');
// } else if (window.pageYOffset >= barBottom) {
//     bar.classList.remove('js-fixed');
// }

//
// // fixed header
// window.addEventListener('scroll', onScroll);
// window.addEventListener('touchmove', onScroll);
// window.onscroll = function () {onScroll()};
//
// function onScroll() {
//     let header = document.querySelector('.header');
//     let headerBottom = header.offsetTop + header.offsetHeight;
//     let headerScroll = document.querySelector('.scroll-header');
//     if (window.pageYOffset >= headerBottom)  {
//         headerScroll.classList.add('visible');
//     } else if ( window.pageYOffset < headerBottom) {
//         headerScroll.classList.remove('visible');
//     }
// }