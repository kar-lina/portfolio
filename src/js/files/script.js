// Підключення функціоналу "Чертоги Фрілансера"

import { headerScroll } from './header-scroll.js';
import { lucideIconsInit } from './icons.js';
import { burgerMenuInit } from './mobile-menu.js';

// Подключение иконок
lucideIconsInit();
// Делегирование событиий клика
function documentActions(e) {
  const targetElement = e.target;

  // Show more
  // if (targetElement.classList.contains('products__more')) {
  //   showMoreProducts(targetElement);
  //   e.preventDefault();
  // }
}
window.onload = function () {
  document.addEventListener('click', documentActions);
  burgerMenuInit();
  headerScroll();
};
