function showHide(state) {
  // JS 문법
  // document.getElementById('ab').style.display = state;  
  // jQuery 문법
  $('#ab').css('display', state);
}
// function off() {
//   document.querySelector('.alert-box').style.display = 'none';
// }

function alertmsg(msg) {
  // JS 문법
  // document.querySelector('.alert').innerHTML = msg;
  // jQuery 문법
  $('.alert').html(msg);
}
