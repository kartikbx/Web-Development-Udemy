const express = require("express");

const app = express();
const https = require("https");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;

    const url = "https://us6.api.mailchimp.com/3.0/lists/a552efa4a5";
    
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME:fname,
                LNAME:lname
            }
        }
        ]
    };
    const jsonData = JSON.stringify(data);
    const options = {
        method:"POST",
        auth:"kart:10eab387d5349c1d299d5b490750847c-us6"
    };
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
            
        });
    });

    request.write(jsonData);
    request.end();

    
    
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});


//API Key
//
//list - 