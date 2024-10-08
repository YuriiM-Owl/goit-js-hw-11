const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

let formData = {
  email: '',
  message: '',
};

window.onload = () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);

    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
};

form.addEventListener('input', () => {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log('Form data:', formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();

    formData = {
      email: '',
      message: '',
    };
  }
});
