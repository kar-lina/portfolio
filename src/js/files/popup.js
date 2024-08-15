export const showPopup = (popupId) => {
  const popup = document.getElementById(popupId);
  console.log('popup', popup);
  if (popup) {
    popup.classList.add('popup_show');
    document.body.classList.add('popup-show');
  }
};

export const closePopup = (e, popupEl=null) => {
  const popup = popupEl?? e.target.closest('.popup');
  if (popup) {
    popup.classList.remove('popup_show');
    document.body.classList.remove('popup-show');
  }
};

export function popupInit() {
  const popupCloseBtns = document.querySelectorAll('.popup__close');

  popupCloseBtns.forEach((popupCloseBtn) => {
    popupCloseBtn.addEventListener('click', closePopup);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_show');
      closePopup(e, openedPopup);
    }
  });

}