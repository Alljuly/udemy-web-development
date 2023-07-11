const express = require("express");

const app = express();


app.get("/", function(request, response){
    response.send("Hello")
});

app.get("/contact", function(req, res){
    res.send("Contact me at allywond@gmail.com")
})


app.get("/about", function(req,res){
    res.send("Elsies pages")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
