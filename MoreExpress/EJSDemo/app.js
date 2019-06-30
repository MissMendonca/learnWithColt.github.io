var express = require("express");
var app = express();

// Tells express to serve the contents of public directory
app.use(express.static("public"));

// We can tell express that we are going to use ejs file and remove .ejs from render 
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");

});

app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
   var posts = [
       {title: "Post 1", author: "Susy"},
       {title: "My adorable pet bunny", author: "Charlie"},
       {title: "Can you believe this pomsky?", author: "Colt"}
       
    ];
    res.render("posts", {posts:posts});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running!");
});