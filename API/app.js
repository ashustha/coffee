const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./app.route');

const app = express();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'coffee'
});

db.connect(function(err){
	if(err){
		console.log(err);
	} else {
		console.log("MYSQL WAS CONNECTED");
	}
});

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, auth');

	next();
};



app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(routes);
 


app.listen(8080,(err) => {
	console.log("Server is running at 8080");
});