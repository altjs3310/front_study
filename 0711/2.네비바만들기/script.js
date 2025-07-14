const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');

// let toggle = false;

// btn.addEventListener('click', () => {
//   if(toggle) {
//    list.classList.remove('show');
//     toggle = !toggle;
//   } else{
//    list.classList.add('show');
//     toggle = !toggle;
//   }
// });

btn.addEventListener('click' , () => {
  list.classList.toggle('show');
})
// jQuery
// $('.list-group').toggleClass('show');

const liTags = document.querySelectorAll('.list-group-item');

for(let i=0; i<liTags.length; i++){

  liTags[i].addEventListener('click', () => {
    alert('zzzzz');
  });
}