
const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    var wt = parseFloat(req.body.weight);
    var ht = parseFloat(req.body.height);
    var BMI = wt/(ht*ht);
    res.send("Your BMI is: " + BMI);
})


app.listen(3000, function(){
    console.log("server started");
});