// 이벤트버블링 : 특정 태그에 이벤트가 발생되면 최상단 부모까지 이벤트가 전달됨
            // 안쪽 태그를 클릭하면 그걸 감싸는 상위 태그들도 클릭한거나 마찬가지
document.querySelector('.container').addEventListener('click', (e) => {
  console.log(e.target);
});

document.querySelector('b').addEventListener('click', (e) => {
  e.stopPropagation(); // 버블링 막기
  alert('b태그 클릭');
});