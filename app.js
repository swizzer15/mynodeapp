
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bootstrap')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  
	var myData = {'todo': []}

	var outputFilename = 'database.json'

    myData.todo.push({val:'test', id: 0})
    myData.todo.push({val:'test1', id: 1})

	fs.writeFile(outputFilename, JSON.stringify(myData), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log(myData.todo.length);
	      console.log(JSON.stringify(myData))
	    }
	}); 
  console.log('Express server listening on port ' + app.get('port'));
});




