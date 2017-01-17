var Model = require('./models/cavsmodel.js')
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');


var tasks = require('./routes/tasks');

var app = express();

var port = process.env.PORT || 3000;


//MW
app.use(bodyParser.json());//for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencode


//DB
var db="mongodb://localhost/appProject";
mongoose.connect(db, function(err, response) {
    if(err){
        console.log('Failed to connect to ' + db);
    }
    else {
        console.log('Connected to '+ db);
    }
});

app.use(express.static(__dirname + '/client'));


//routes
app.use('/', tasks);



app.listen(port, function() {
   console.log('Listening on port ' + port);
});