var express = require("express");
var app = express();

// first route

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalName", function(req, res){
    var animal = req.params.animalName.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }
    
    var sound = sounds[animal];
    res.send("The "+ animal + " says '" + sound + "'");
    
});

app.get("/repeat/:subject/:num", function(req, res) {
    var sub = req.params.subject;
    var num = Number(req.params.num);
    var sentence = sub;
    for(var i = 1; i < num; i++){
       sentence += " " + sub;
    }
    res.send(sentence);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});












