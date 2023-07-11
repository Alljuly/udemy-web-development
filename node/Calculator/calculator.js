const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    
    let sum = num1+num2;

    res.send("Thks for posting, the result is " +sum);
})

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname +"/bmiCalculator.html");
})



app.post("/bmiCalculator", function(req, res){

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);


    let bmi = weight / (height * height);

    res.send("Your BMI is " +bmi)
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});