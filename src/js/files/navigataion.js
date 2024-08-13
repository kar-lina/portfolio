export function navigationInit() {
  // const navLi = document.querySelectorAll('header .menu__list li');
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', navHighlighter);
  function navHighlighter () {
    // Get current scroll position
    let scrollY = window.scrollY;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute('id');

      /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('header .menu__item a[href*=' + sectionId + ']').classList.add('_active');
      } else {
        document.querySelector('header .menu__item a[href*=' + sectionId + ']').classList.remove('_active');
      }
    });
  }
  
}
