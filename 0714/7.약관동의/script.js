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
let agree = false;

chk.addEventListener('click', () => {
  agree = true;
});


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

  if(chk != true){
    alert('약관에 동의하십시오')
  } else if(chk) {
    alert('다음')
  }

});