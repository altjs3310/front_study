const btn = document.querySelector('.btn-mode');
const body = document.body;

btn.addEventListener('click', () => {
  body.style.background = 'black',
  body.style.color = 'white'
});
  //(btn.value) = '다크모드';