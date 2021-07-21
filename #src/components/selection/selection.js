const choices_selection = document.querySelectorAll('.selection__select');

for (let i = 0; i < choices_selection.length; i++) {
    const choices = new Choices(choices_selection[i], {
        searchEnabled: true,
        position: "bottom",
        itemSelectText: '',
        shouldSort: false,
    });
}