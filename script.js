function getWeather() {
    /*Get the location*/

    $.getJSON('http://ip-api.com/json', function(data){
        var country = data.countryCode;
        var city = data.city;
        var longi = Math.round(data.lon);
        var lati = Math.round(data.lat);

        document.getElementById("city").innerHTML=city;
        document.getElementById("country").innerHTML=country;

        /*Get and display weather data*/
        var units = "&units=metric";
        var appid ="&APPID=b86d4cef41eef83c1b8541a5a8afd182";
        var api="http://api.openweathermap.org/data/2.5/weather?q=";
        var weatherURL = api + city + units+ appid;

        $.getJSON(weatherURL, function(response){
            console.log(response);
        });

        console.log(weatherURL);
    });



    /*Based on weather display icon*/


}


/*Execute functions*/
$(document).ready(function(){
    getWeather();
})
