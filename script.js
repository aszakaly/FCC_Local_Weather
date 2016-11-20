var temp = "";

function getWeather() {
    /*Get the location*/

    $.getJSON('http://ip-api.com/json', function (data) {
        var country = data.countryCode;
        var city = data.city;
        var longi = Math.round(data.lon);
        var lati = Math.round(data.lat);

        document.getElementById("city").innerHTML = city;
        document.getElementById("country").innerHTML = country;

        /*Get and display weather data*/


        var units = "&units=metric";
        var appid = "&APPID=b86d4cef41eef83c1b8541a5a8afd182";
        var api = "http://api.openweathermap.org/data/2.5/weather?q=";
        var weatherURL = api + city + units + appid;

        $.getJSON(weatherURL, function (response) {

            var sky = response.weather[0].main;
            temp = response.main.temp;
            var metric = document.getElementById("metric").value;

            if (metric === "F") {
                temp = Math.round((temp * 9) / 5 + 32);
            }

            document.getElementById("temperature").innerHTML = temp;
            document.getElementById("weatherType").innerHTML = sky;

            /*Based on weather display icon*/
            var weatherId = 700 /*response.weather[0].id*/ ;
            var icon = "";

            if (weatherId = 800) {
                icon = "clear";
            } else if (weatherId >= 200 && weatherId <= 232) {
                icon = "thunderstorm";
            } else if (weatherId >= 300 && weatherId <= 321) {
                icon = "drizzle";
            } else if (weatherId >= 500 && weatherId <= 504) {
                icon = "rain";
            } else if (weatherId >= 511 && weatherId <= 531) {
                icon = "showerRain";
            } else if (weatherId >= 600 && weatherId <= 622) {
                icon = "snow";
            } else if (weatherId >= 700 && weatherId <= 781) {
                icon = "atmoshphere";
            } else if (weatherId >= 801 && weatherId <= 804) {
                icon = "clouds";
            };

            document.getElementById(icon).style.display = "block";
            console.log(metric);
        });
    });
}



/*Recalculation of tempterature upon changing metric*/

function recalcTemp() {
    var metric = document.getElementById("metric").value;
    var tempF = Math.round((temp * 9) / 5 + 32);
    var displayTemp = "";

    if (metric === "F") {
        displayTemp = tempF;
    } else {
        displayTemp = temp;
    }

    document.getElementById("temperature").innerHTML = displayTemp;

}


/*Execute functions*/
$(document).ready(function () {
    getWeather();

    $("#metric").change(function () {
        recalcTemp();
    });
})
