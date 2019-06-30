var express = require("express");
var app = express();
var request = require("request");

app.get("/", function(req, res) {
    res.render("search");
});

app.set("view engine", "ejs");

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query +"&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            console.log(parsedData["Search"]);
            res.render("results", {data: parsedData});
        }    
    });
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server running");
    
});

