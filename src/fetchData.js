export const setData = (location) => {
    if (location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=90bda63e7c2bc25d4b3159b92c0ff7a8`).then(function(response){
            response.json().then(function(data) {
                console.log(data);
                displayWeather(data);
            });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
            });
    };
};

export const displayWeather = (data) => {
    const name = document.querySelector('.dataTitle');
    const temp = document.querySelector('.tempe');
    const humText = document.querySelector('.hum');
    const humidity = document.querySelector('.humValue');
    const pressText = document.querySelector('.pres');
    const press = document.querySelector('.presValue');
    const windText = document.querySelector('.wind');
    const wind = document.querySelector('.windValue');
    const contText = document.querySelector('.cont');
    const cont = document.querySelector('.contValue');
    const img = document.getElementById('img')

    name.innerText = `Weather Today in  ${data.name}.`;
    temp.innerText = `${data.main.feels_like}°C`;
    humText.innerText = `Humidity`;
    humidity.innerText = `${data.main.humidity}`;
    pressText.innerText = `Pressure`;
    press.innerText = `↓${data.main.pressure} mb`;
    windText.innerText = `Wind`;
    wind.innerText = `${data.wind.speed} m/s`;
    contText.innerText = `Country`;
    cont.innerText = `${data.sys.country}`;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}