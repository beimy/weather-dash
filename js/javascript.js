let param_lat = 33.44;
let param_lon = -94.04;
const WEATHER_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${param_lat}&lon=${param_lon}&appid=${API_KEY_WEATHER}`;

// function to call the weather api return response
function fetchWeather(lat, lon) {

    fetch(build_APICall(lat, lon))
        .then(function(data) {
            return data.json();
        })
            .then(function(response) {
                console.log(response);
                return response;
            })
}

// function to build the api call into a string
function build_APICall(lat, lon) {
    let api_call = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}`;

    return api_call;
}

fetchWeather(param_lat, param_lon);
