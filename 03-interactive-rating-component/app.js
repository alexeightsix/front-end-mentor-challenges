const toggleStep = () => {
  document.getElementsByClassName('step-1')[0].style.display = "none";
  document.getElementsByClassName('step-2')[0].style.display = "";
}

const buttons = document.querySelectorAll('.step-1 ul li > a');

buttons.forEach((elm) => elm.addEventListener("click", (e) => {
  e.preventDefault();
  buttons.forEach((elm) => elm.parentNode.classList.remove('highlight'));
  buttons.forEach((elm) => elm.parentNode.classList.remove('active'));
  e.target.parentNode.classList.add('active')
  document.getElementsByClassName('score')[0].innerHTML = elm.dataset.rating
}));

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  toggleStep();
});

document.getElementsByClassName('mask')[0].style.display = 'flex'
