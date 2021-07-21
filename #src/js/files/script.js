// //Smooth scroll to the anchor
// const anchors = document.querySelectorAll('a[href*="#"]')
//
// //Каждому якорю присваиваем обработчик события
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         //убираем стандартное поведение по клику
//         e.preventDefault()
//
//         const blockID = anchor.getAttribute('href').substr(1)
//
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

/////////
////INPUT MASK
////////
let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);


document.addEventListener("DOMContentLoaded", function () {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    OverlayScrollbars(document.querySelectorAll(".scroll"), {});
});


@@include('../../components/header/header.js', {})
@@include('../../components/menu/menu.js', {})
@@include('../../components/modal/modal.js', {})
@@include('../../components/product/product.js', {})
@@include('../../components/photo/photo.js', {})
@@include('../../components/accordions/accordions.js', {})
@@include('../../components/bar/bar.js', {})
@@include('../../components/selection/selection.js', {})
@@include('../../components/articles/articles.js', {})
@@include('../../components/instagram/instagram.js', {})
@@include('../../components/map/map.js', {})
@@include('../../components/footer/footer.js', {})


//Range Slider (NOUISLIDER)
if
(document.querySelector('.range'))
{

    const priceSlider = document.querySelector('.range__slider');

    noUiSlider.create(priceSlider, {
        connect: true,
        tooltips: false,
        start: [170200, 4200000],
        step: 1000,
        // margin: 5,
        range: {
            'min': [170200],
            'max': [4200000]
        },
        format: {
            from: function (value) {
                return parseInt(value);
            },
            to: function (value) {
                return parseInt(value);
            }
        }
    });

    var valueFrom = document.querySelector('.slider-values__from'),
        valueTo = document.querySelector('.slider-values__to');
    var inputs = [valueFrom, valueTo];

    // When the slider value changes, update the inputs
    priceSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            valueTo.value = values[handle];
        } else {
            valueFrom.value = values[handle];
        }
    });
    //

    //reading data from inputs
    valueFrom.addEventListener('change', function () {
        priceSlider.noUiSlider.set([this.value]);
    });

    valueTo.addEventListener('change', function () {
        priceSlider.noUiSlider.set([valueFrom.value, this.value]);

    });


    // Listen to keydown events on the input field.
    inputs.forEach(function (input, handle) {

        input.addEventListener('change', function () {
            priceSlider.noUiSlider.setHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {

            var values = priceSlider.noUiSlider.get();
            var value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            var steps = priceSlider.noUiSlider.steps();

            // [down, up]
            var step = steps[handle];

            var position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {

                case 13:
                    priceSlider.noUiSlider.setHandle(handle, this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }

                    // null = edge of slider
                    if (position !== null) {
                        priceSlider.noUiSlider.setHandle(handle, value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        priceSlider.noUiSlider.setHandle(handle, value - position);
                    }

                    break;
            }
        });
    });
}
// END OF NOUISLIDER SCRIPT





