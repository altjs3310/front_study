// 비동기 통신
// 요청 시 사용되는 메서드 
// get : 정보를 받아옴 (마이페이지)
// post : 정보를 생성 (회원가입, 로그인)
// put : 정보를 수정 (회원정보 수정)
// delete : 정보를 삭제 (회원탈퇴)

const xhr = new XMLHttpRequest(); // 옛날 방식
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json");
// JSON : 형태로 거의 대부분 주고 받음 js에 object처럼 키와 값으로 되어있음, 배열도 가능
      // 하지만 js에서 사용하는 배열, 오브젝트를 바로 전송하는건 불가능하여 해당 데이터를 JSON으로 변환후 전송
      // 요청 후 응답이 온 데이터도 JSON, 해당 데이터를 js에서 사용하려면 배열, 오브젝트로 변환

// const data = {
//   userId : 100,
//   title : '비동기통신 연습',
//   body : '이것저것보내는중'
// };      

// xhr.send( JSON.stringify(data) );
// xhr.onload = () => {
//   console.log(xhr.status); // 응답 결과에 해당하는 상태코드
//   console.log(JSON.parse(xhr.response)); // 응답 데이터
// }

// 요즘문법
// fetch('요청주소')
// .then((변수) => 성공 시 처리할 코드)
// .then((변수) => 성공 시 처리할 코드)
// .catch((e) => 요청 실패 시 처리할 코드)

const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userid = document.querySelector('.userid');
const body = document.querySelector('.body');

getBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts/3')
  .then( (response) => response.json() )
  .then( (data) => {
    title.innerHTML = data.title;
    id.innerHTML = data.id;
    userid.innerHTML = data.userId;
    body.innerHTML = data.body;
  })
  .catch(e => { // 실패
    console.log(e);
  })
});

const post_userId = document.querySelector("[name='userId']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");

postBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'post',
    body : JSON.stringify(data),
    headers : {
      "content-type" : "application/json"
    }
  }).then( response => response.json() )
    .then( data => {
      console.log(data);
      alert('게시글 등록 완료');
    })
    .catch(e => {
      console.log(e);
      alert('게시글 등록 실패');
    })

});

const async_test = document.querySelector('.async');

async_test.addEventListener('click', async () => {

  let a = 1;

  a = await fetch('https://jsonplaceholder.typicode.com/posts/3');
  a = await a.json();

  console.log(a);

});

function add(i) {

  for(i=0; i<10000; i++){

  }
  return i;
}