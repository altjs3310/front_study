const btnBoard = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const modalBox = document.querySelector('.black-bg');

btnBoard.addEventListener('click', () => {
  modalBox.classList.add('show');
});

// jQuery
// $('#open').on('click', () => {
// $('.black-bg').addClass('show');
//   $('.black-bg').fadeIn();
// });



btnClose.addEventListener('click', () => {
  modalBox.classList.remove('show');
});

// $('#close').on('click', () => {
//   $('.black-bg').removeClass('show');
//   $('.black-bg').fadeOut();
// });