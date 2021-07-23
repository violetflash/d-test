const modalLabels = document.querySelectorAll('.modal-form__label-text');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const submitBtn = document.getElementById('submit-btn');
const form = document.querySelector('.modal-form');
const inputs = form.querySelectorAll('input');
const fields = [...inputs, textarea];


modalLabels.forEach(label => {
  label.textContent = capitalizer(label.textContent);
});

overlay.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.closest('.modal')) {
    closeModal();
  }

  if (target.classList.contains('')
});

//вынести в общий код
const showError = (node) => {
  let timeoutId;
  node.classList.add('error');
  node.classList.add('err-animated');
  timeoutId = setTimeout(() => {
    node.classList.remove('err-animated');
    clearTimeout(timeoutId);
  }, 1000);
}

const removeError = (node) => {
  node.classList.remove('error');
}

const showValid = (node) => {
  node.classList.add('valid');
}

const removeValid = (node) => {
  node.classList.remove('valid');
}

const modalClickHandler = (e) => {
  const target = e.target;

  fields.forEach((field) => {
    if (field.id === target.id) {
      removeError(target);
    }
  })
};

modal.addEventListener('click', modalClickHandler);


const validateName = (e) => {
  const target = e.target;

  if (target.value.length < 2) {
    showError(target);
    return;
  }

  target.value = target.value.replace(/-$/gi, '');
  target.value = capitalizer(target.value.trim());
};

const validateNameInput = (e) => {
  const target = e.target;
  target.value = target.value.replace(/^[\s|-]/gi, '').replace(/[^a-zA-Zа-яА-Я- ]/gi, '').replace(/\s{2}/gi, ' ')
      .replace(/-{2}/gi, '-').replace(/(?<=-)\w/gi, match => capitalizer(match)).replace(/(?<=-)\s/gi, '')
      .replace(/(?<=\s)-/gi, '');
};

const validateEmail = () => {
  return /^[\w|-]+@[\w|-]+\.\w{2,}$/.test(email.value);
};

const checkEmailValidation = (e) => {
  const target = e.target;

  if (validateEmail()) {
    showValid(target);
  } else {
    showError(target)
    removeValid(target);
  }
};

const validateEmailInput = (e) => {
  const target = e.target;
  target.value = target.value.replace(/-{2}/gi, '-').replace(/\.{2}/gi, '.').replace(/^[\W|_]/gi, '').replace(/-(?=@)/gi, '')
      .replace(/\.(?=@)/gi, '');
};

const validateTextareaInput = (e) => {
  const target = e.target;
  target.value = target.value.replace(/\s\s/gi, ' ');
  // target.value = target.value.trim();
};

const validateTextareaBlur = (e) => {
  const target = e.target;

  if (!target.value) {
    showError(target);
    return;
  }

  target.value = target.value.trim();
};

const submitValidation = () => {
  let result = true;
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].classList.contains('error') || !fields[i].value) {
      showError(fields[i]);
      result = false;
    }
  }

  return result;
};

const submitHandler = (e) => {
  e.preventDefault();
  submitValidation();
  console.log(submitValidation());
};

name.addEventListener('blur', validateName);
name.addEventListener('input', validateNameInput);
email.addEventListener('blur', checkEmailValidation);
email.addEventListener('input', validateEmailInput);
textarea.addEventListener('input', validateTextareaInput);
textarea.addEventListener('blur', validateTextareaBlur);
submitBtn.addEventListener('click', submitHandler);

// fields.forEach((field) => {
//   field.addEventListener('click', () => removeError(field));
// })


