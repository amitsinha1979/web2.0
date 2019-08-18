var mysql = require("mysql");
var db_config ={
  host : '127.0.0.1',
  user : 'root',
  password : 'msgcode34',
  database : 'webapp'
};

var connection;
console.log("inside db.js 1")
function handleConnection(){
  connection = mysql.createConnection(db_config);
  console.log("inside Connection");
  connection.connect(function(err){
      if(err){
          console.log('error when connecting to db:', err);
          setTimeout(handleConnection, 2000);
      }
  });
  console.log("established connection 1");
  connection.on('error', function(err){
    if(err.code == 'PROTOCOL_CONNECTION_LOST'){
      handleConnection();
    }else{
      throw err;
    }
  });
}

handleConnection();
console.log("established connection 2");
module.export = connection;
