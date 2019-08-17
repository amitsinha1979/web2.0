var mysql = require("mysql");
var db_config ={
  host : '127.0.0.1',
  user : 'root',
  password : 'msgcode34',
  database : 'webapp'
};

var connection;

function handleConnection(){
  connection = mysql.createConnection(db_config);
  connection.connect(function(err){
      if(err){
          console.log('error when connecting to db:', err);
          setTimeout(handleConnection, 2000);
      }
  });
  connection.on('error', function(err){
    if(err.code == 'PROTOCOL_CONNECTION_LOST'){
      handleConnection();
    }else{
      throw err;
    }
  });
}

handleConnection();
module.export = connection;
