const box = document.querySelector('.box');

let boxY = box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight);

let isDisabled = true;

box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  
  if(isDisabled && boxHeight + scroll > boxY - 5) { 
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }
})

const chk = document.querySelector('#chk');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {

  if(!chk.checked){
    alert('약관에 동의하십시오')
  } else {
    alert('다음')
  }

});

console.log(window.innerHeight);
console.log(document.body.clientHeight)

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;

window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  const status = window.scrollY / (bodyHeight - innerHeight) * 100;

  document.querySelector('.status-bar').style.width = `${status}%`;

});
