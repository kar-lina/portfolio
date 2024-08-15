// Підключення функціоналу "Чертоги Фрілансера"

import { formValidation } from './form-validation.js';
import { headerScroll } from './header-scroll.js';
import { lucideIconsInit } from './icons.js';
import { burgerMenuInit } from './mobile-menu.js';
import { navigationInit } from './navigataion.js';
import { popupInit } from './popup.js';
import { loadProjectsInit } from './projects.js';
import { skillsLoadInit } from './skills-load.js';

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
window.onload =  function () {
  document.addEventListener('click', documentActions);
  burgerMenuInit();
  headerScroll();
  skillsLoadInit();
  navigationInit();
  loadProjectsInit();
  formValidation();
  popupInit();
};
