const hamburguerButton = document.getElementById('js-menu');
const menuItems = document.querySelectorAll('.js-nav-menu');

const toggleMenu = (): void => {
  document.body.classList.toggle('menu-open');
};

const navigateToSection = (event: Event) => {
  event.preventDefault();
  toggleMenu();
  if (event && event.target) {
    const nameToGo = (event.target as HTMLAnchorElement).getAttribute(
      'data-section',
    );

    if (nameToGo) {
      const elementToGo = document.getElementById(nameToGo);
      if (elementToGo) {
        elementToGo.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }
};

if (hamburguerButton) {
  hamburguerButton.addEventListener('click', toggleMenu);
}

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', navigateToSection);
});
