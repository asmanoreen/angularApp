var express = require('Express');
var Promise = require('promise');
const config = require('./config');
console.log(process.env.NODE_ENV);
var app = express();

var rout = require('./router/mainrouter');

app.use('/', rout);

var serverrunning= new Promise(function(resolve,reject){

 if(resolve){
   resolve("I'm runing at port " + config.app.port);
 }else {
   reject("not running");
 }
});
//app.listen(config.app.port,'0.0.0.0',serverrunning.then(function(itsresolve)
app.listen(config.app.port,'0.0.0.0',serverrunning.then(function(itsresolve){
  console.log(itsresolve);
}));
