//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const weatherApi = {
    key: "b6d0c0fbc79ad7d0f5bc2e8a3525ccfb",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

//Event Listener Function on keypress

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})


//Get Weather Report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//Show Weather Report

function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.48d883d3d249ee61134162c21d272339?rik=YTf6zXdAD0OmCA&riu=http%3a%2f%2fl.yimg.com%2fos%2fmit%2fmedia%2fm%2fweather%2fimages%2ffallbacks%2flead%2fclear_d-1394274.jpg&ehk=wahv%2bCEZv1dC%2bDw4v3IUMQD032Ca6C285rQMDHdXE%2bE%3d&risl=&pid=ImgRaw&r=0')";
    }
    else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('https://img.jakpost.net/c/2019/01/16/2019_01_16_63196_1547653415._large.jpg')";
    }
    else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.jM0hRkwaESqQJlnzGHB0pwHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
    }
    else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.1w4QmHCkSLLZDTE6zOXBCAHaEn?w=180&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
    }
    else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.TkpLbnOoYV4SPoOSN5283wHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
    }
    else if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.AfO9QdRDHr5bG7Yw69rgiQHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
    }
    else if(weatherType.textContent == 'Windy'){
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.40aa67abb0ab28aa8df788a0b8ccfbbd?rik=DknoU9oJdq%2fb6g&riu=http%3a%2f%2fcdn.shutterstock.com%2fshutterstock%2fvideos%2f4107430%2fthumb%2f1.jpg%3fi10c%3dimg.resize(height%3a72)&ehk=ZfJYd7JCr38EQD%2bBx%2bs48lz2NmOa0et61Xyz8TwNCgU%3d&risl=&pid=ImgRaw&r=0')";
    }
}

//Date manage
function dateManage(dateArg){

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
