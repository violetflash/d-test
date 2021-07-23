const modal = document.querySelector('.modal');
const successModal = document.querySelector('.success-modal');
const modalLabels = document.querySelectorAll('.modal-form__label-text');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const submitBtn = document.getElementById('submit-btn');
const form = document.querySelector('.modal-form');
const inputs = form.querySelectorAll('input');
const fields = [...inputs, textarea];
const preloader = document.querySelector('.modal-form__preloader');


modalLabels.forEach(label => {
  label.textContent = capitalizer(label.textContent);
});

overlay.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.closest('.modal')) {
    closeModal(modal);
  }
});

const showPreloader = () => {
  preloader.classList.add('js-active');
};

const hidePreloader = () => {
  preloader.classList.remove('js-active');
};

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

const clearErrors = (arr, target) => {
  arr.forEach((field) => {
    if (field.id === target.id) {
      removeError(target);
    }
  })
}

name.addEventListener('blur', validateName);
name.addEventListener('input', validateNameInput);
email.addEventListener('blur', checkEmailValidation);
email.addEventListener('input', validateEmailInput);
textarea.addEventListener('input', validateTextareaInput);
textarea.addEventListener('blur', validateTextareaBlur);


const postData = body => fetch('./server.php', {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json'
  },
});

const modalClickHandler = (e) => {
  const target = e.target;

  clearErrors(fields, target);

  if (target.id === 'submit-btn') {
    e.preventDefault();

    if (submitValidation()) {
      showPreloader();
      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      body = JSON.stringify(body);
      postData(body)
          .then(response => {


            if (response.status !== 200) {
              throw new Error('Нет ответа от сервера');
            }
            closeModal(modal);
            openModal(successModal);

            setTimeout(() => {
              closeModal(successModal);
            }, 5000);
            form.reset();
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
};

const successBtnHandler = () => {
  closeModal(successModal);
};

modal.addEventListener('click', modalClickHandler);
successModal.addEventListener('click', successBtnHandler);


