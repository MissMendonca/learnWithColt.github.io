var express = require("express");
var app = express();

// "/" => "Hi There!"
app.get("/", function(req,res){
    res.send("Hi there!");
});
// "/bye" => "GoodBye!"
app.get("/bye", function(req, res){
    res.send("GoodBye!");
});
// "/dog" => "Meow!"
app.get("/dog", function(req, res){
    res.send("Meow!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to " + subreddit.toUpperCase() + " SubReddit!"); 
});


app.get("*", function(req, res) {
    res.send("You are a STAR!!!");
});
// Tell express to listen for requests(start server)
// PORT environment variable from c9
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
    });