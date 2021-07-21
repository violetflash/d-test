let articles = document.querySelectorAll('.articles .article-card__figure');

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener('mouseleave', function(e) {
        for (let k = 0; k < articles.length; k++) {
            articles[k].classList.remove('js-hover');
        }
    });
}
