//BWO Microservice
var express = require('express');
var request = require('request');
var mysql = require('mysql');
var connection = connectToDatabase('myHost', 'myUser', 'myPassword', 'myDatabase');

var app = express();

app.use(express.static('public'));
console.log('Exact name: ' + process.env.ORA_INSTANCE_NAME);
//runGetRequest();
//runDatabaseQuery();

// Does a GET request to ip.jsontest.com
function runGetRequest() {
    
    //sample URL.
    //var url = "http://ip.jsontest.com/";
    var url = "http://140.86.15.104:3000/shield/33/45/yellow/brains44";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

//Executes a SQL query
function runDatabaseQuery() {
    connection.query("SELECT * FROM SampleTable", function(error, rows, fields) {
        if(!error) {
            console.log(rows);
        } else {
            console.log(error);
        }
    });
};

// Returns a connection object to the database.
function connectToDatabase(host, user, password, database) {
    var connectionJson = {
        host: host,
        user: user,
        password: password,
        database: database,
        timezone: 'utc'
    };
    return mysql.createConnection(connectionJson);
};

module.exports = app;
