(() => {
  let in_transition = false;

  const menuToggleButtons = document.querySelectorAll('.mobile-menu-toggle');

  const toggleMenu = () => {

    if (!in_transition) {
      in_transition = true;

      const nav = document.querySelector('nav');

      document.querySelector('.mask').classList.toggle('hidden');
      nav.classList.toggle('active');
      in_transition = false;
    }
  };

  for (var i = 0; i < menuToggleButtons.length; i++) {
    menuToggleButtons[i].addEventListener('click', (e) => toggleMenu(e));
  }
})()
