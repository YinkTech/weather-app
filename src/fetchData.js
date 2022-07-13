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
    const humidity = document.querySelector('.humValue');
    const press = document.querySelector('.presValue');
    const wind = document.querySelector('.windValue');
    const cont = document.querySelector('.contValue');

    name.innerText = `Weather Today in  ${data.name}.`;
    temp.innerText = `${data.main.feels_like}°C`;
    humidity.innerText = `${data.main.humidity}`;
    press.innerText = `↓${data.main.pressure} mb`;
    wind.innerText = `${data.wind.speed} m/s`;
    cont.innerText = `${data.sys.country}`;
}