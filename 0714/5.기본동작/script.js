document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault(); // 기본동작 막아주는 메서드
  console.log('aaaa');
});

document.querySelector('p').addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('aaa');
});

document.querySelector('p').addEventListener('selectstart', (e) => {
  e.preventDefault();
  alert('드래그x');
});