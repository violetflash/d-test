//Клик на миниатюре меняет src аттрибут у главной картинки
let img_thumbs = document.querySelectorAll('.photo__img');
let img_thumbsDiv = document.querySelectorAll('.photo__thumb');
let target_img = document.getElementById('big-image');
let modal_img = document.getElementById('modal-photo-img');

for (let i = 0; i < img_thumbs.length; i++) {
    let img_thumb = img_thumbs[i];

    img_thumb.addEventListener('click', function(e) {
        //remove all active states
        for (let i = 0; i < img_thumbsDiv.length; i++) {
            img_thumbsDiv[i].classList.remove('js-active');
        }
        //add active to this
        img_thumbsDiv[i].classList.add('js-active');
        target_img.src = img_thumb.getAttribute("src");
        //Меняем аттрибут у модального окна для просмотра
        modal_img.src = img_thumb.getAttribute("src");
    });
}

//LightGallery plugin initialize
lightGallery(document.getElementById('lightgallery'));


