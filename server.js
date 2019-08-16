const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//First middleware before response is sent
/*app.use('/', function(req, res, next){
    console.log("Start");
    next();
    //res.send("HELLO");
    //next();
});

//Route Handler
app.get('/', function(req, res, next){
    res.send("HELLO WEB 2.0");
    next();
    //res.end();
});

app.use('/', function(req,res){
  console.log("End");
});
*/
//console.log('Hello Web 2.0');

/*Handling all the parser */
app.use(bodyParser.json());

app.post('/', function(req, res){
  var email = req.body.email;
  var amount = req.body.amount;

  res.send({"amount" : amount, "email" : email});

});

app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});
