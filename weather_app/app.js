const express = require("express");
const https = require("https");

const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req,res){
    const city = req.body.location;
    const apikey = "94faea120f39633e57e5dade5096ded4";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apikey;
    
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
    
            res.write("<h1>The weather at "+city+" is "+temp+" degrees celsius.</h1>");
            res.write("<img src=http://openweathermap.org/img/wn/"+icon+"@2x.png>");
            res.send();
        });
    });
    
    

});

app.listen(3000,function(){
    console.log("Server started on port 3000");
})