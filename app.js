'use strict';
var express = require('express');
var routers = require('./routers');
var app = express();

app.get('/api',function(req,res){

	res.json({message:'Hello World'});
});





app.listen(3000,appconfigLog);

function appconfigLog(){
	console.log('> localhost:3000');

}