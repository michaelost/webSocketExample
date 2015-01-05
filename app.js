var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var WebSocketServer = require('ws').Server
, wss = new WebSocketServer({port:8080});
var app = express();


wss.on('connection',function connection(ws){
	console.log('connection established');
		ws.on('message',function incoming(message){
			console.log(message);
		});

	ws.send('message from server: hello client');
});


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function(req,res){

	res.render('index.html');
});





module.exports = app;
