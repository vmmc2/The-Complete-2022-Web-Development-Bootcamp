const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server is running on port 3000!");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const cityName = req.body.cityName;
    
    const query = cityName;
    const apiKey = "431f6dca6b1c5822a1e089603f77dcc2";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const iconID = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + iconID + "@2x.png";

            res.write("<h1> City: " + cityName + " </h1>");
            res.write("<h2> Temperature: " + temp + " Celsius degree <h2>");
            res.write("<h2> Weather condition: " + weatherDescription + "<h2>");
            res.write("<img src=\"" + imageURL + "\">");
            res.end();
        });
    });
});

