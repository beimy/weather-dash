let param_lat = 33.44;
let param_lon = -94.04;
// let latLong;
let citySearched = 'London'
const WEATHER_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${param_lat}&lon=${param_lon}&units=imperial&appid=${API_KEY_WEATHER}`;
const GEO_API = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearched}&limit=5&appid=${API_KEY_WEATHER}`

//Call local storage to build previous search list

//Save searches to local storage

//Populate current weather based on search

//Populate forecast cards

//Add dates to forecast cards

// function to call the weather api return response
function fetchWeather(lat, lon) {

    fetch(build_APICall(lat, lon))
        .then(function(data) {
            return data.json();
        })
            .then(function(response) {
                return response;
            })
            .then(function(weather_obj) {
                buildPage(weather_obj);
            })
}


function getLatLongByCity(searchedCity) {

    fetch(build_APICityCall(searchedCity))
    .then(function(data) {
        return data.json();
    })
        .then(function(response) {
            let latLong = [response[0].lat, response[0].lon]
            console.log(latLong);
            return latLong;
        })
        .then(function(latLong) {
            console.log(fetchWeather(latLong[0], latLong[1]));
        })

        
}

function buildPage(weather_obj){
    console.log(weather_obj);
}

// function to build the api call into a string
function build_APICall(lat, lon) {
    let api_call = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY_WEATHER}`;

    return api_call;
}
// function to build url call to api that finds a city's lat and long
function build_APICityCall(searchedCity) {
    let api_url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=5&appid=${API_KEY_WEATHER}`;

    return api_url;
}



//Search button functionality 
$('#search-btn').on('click', async () => {
    var searchedQuery = $('textarea').val();
    console.log('city searched: ' + searchedQuery);

    getLatLongByCity(searchedQuery);
})


