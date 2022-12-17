
const form = document.getElementById('trial-form');

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const isValid = (key, value) => {
  if (key == 'email' && !validateEmail(value)) {
    return false;
  } else if (key == 'password' && key.length < 8) {
    return false;
  } else if (value == '') {
    return false;
  }
  return true;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  for (const pair of formData.entries()) {
    var elm = document.querySelector('[name="' + pair[0] + '"]');

    if (!isValid(pair[0], pair[1])) {
      elm.classList.add('error');
    } else {
      elm.classList.remove('error');
    }
  }
});
