var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Fabrikam Solutions");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam</h1>"+
              "<hr/>"+
              "<p> Fabrikam is a multinational company has their 24 Offices all over world. </p>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
