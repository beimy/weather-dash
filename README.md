# Weather Dashboard

Live Link: https://beimy.github.io/weather-dash/
Repo Link: https://beimy.github.io/weather-dash/

Current Live Screenshot:
![weather-dash screenshot](https://user-images.githubusercontent.com/33100653/161462762-12df773d-944d-4c5a-8fa7-e06d3400d167.PNG)

The goal of this application is to allow a user to search a city and return its current and future weather data. 
In order to achieve this I implemented the 3rd party api Open Weather. Open Weather returns weather data based on latitude and longitude coordinates. This presented the first challenge of the site: converting the users search from a city name to lat and lon coordinates. Luckily Open weather provided this functionality in another of their open api's so once I found the documentation it was game on. The tricky part was getting the fetch data to work properly. I ran into an issue with trying to retrieve the data before it was returned from the remote database. My solution was to pass the promised data object from the nested then function into the function call to retrieve the actual weather data. This insured that I had the coordinates defined before tyring to reach out to Open Weather.

Displaying the current weather was easy enough with jquery, I simply targeted each id'd element and updated the data into them. 

As it currently stands the site does not fetch future forecasts for the city. I need to make a whole new url call to another open weather api that holds forcast data.

As it currently statnds the site does not save and load past user city searches. This is the next feature I plan on adding.
