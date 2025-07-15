const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};

const select = document.querySelector('select');
const APIKEY = `6c33f7944c2432dc018c3e4f8b6e3828`
const temp = document.querySelector('.temp');
const name = document.querySelector('.name');
const weather = document.querySelector('.weather');
const img = document.querySelector('img');


select.addEventListener('change', () => {

  const country = select.value;
  const lat = countryCoordinates[country].latitude;
  const lon = countryCoordinates[country].longitude;

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;

  fetch(URL)
    .then (response => response.json())
    .then((data) => {
      console.log(data);
      name.innerHTML = data.name;
      temp.innerHTML = data.main.temp;
      weather.innerHTML = data.weather[0].description;
      const icon = data.weather[0].icon;

      iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
      img.setAttribute('src',iconURL);
    })

});
