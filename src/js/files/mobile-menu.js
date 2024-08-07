export const burgerMenuInit = () => {
  const menu = document.querySelector('header nav.menu');
  const burgerButton = document.querySelector('header .menu__btn');

  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  
} 