const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const {save_user_information} = require('./models/server_db');
const {get_total_amount} = require('./models/server_db');

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

if(amount <= 1){
  return_info = {};
  return_info.error = true;
  return_info.message = "The amount should be greater than 1";
  return res.send(return_info);
}

  var result = save_user_information({"amount" : amount, "email" : email});
  res.send(result);
});

app.get('/get_total_amount', async(req, res)=>{
  var result = get_total_amount();
  console.log(result);
  res.send(result);
});

app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});
