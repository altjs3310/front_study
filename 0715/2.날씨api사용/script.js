const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const name = document.querySelector('.name');
const img = document.querySelector('img');

function connectGeo(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // console.log(`위도:${lat} 경도:${lon}`);
  const APIKEY = '6c33f7944c2432dc018c3e4f8b6e3828';

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
 
  fetch(URL)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      name.innerHTML = data.name;
      temp.innerHTML = data.main.temp;
      description.innerHTML = data.weather[0].description;
      const icon = data.weather[0].icon;

      const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
      img.setAttribute('src', iconURL)

    })  

}



function errorGeo() {
  alert('위치 정보 연결 실패')
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);