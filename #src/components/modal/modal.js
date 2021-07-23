const modalLabels = document.querySelectorAll('.modal-form__label-text');

modalLabels.forEach(label => {
  label.textContent = capitalizer(label.textContent);
});
