var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var hotelsRouter = require('./controller/hotelController');


var app = express();

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/hotel-db').then(() => {
        console.log("DB connected !");
    })
    .catch((error) => {
        console.log("error : " + error);
    })
app.use('/hotels', hotelsRouter);

// catch 404 and forward to error handler


// error 
var http = require('http');
const { error } = require('console');
var server = http.createServer(app);

server.listen(3000, () => {
    console.log('server started');

})
module.exports = app;