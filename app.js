var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

//var scrap = require('./routes/scrap');
var player = require('./routes/player');
var app = express();

var mongoose = require('mongoose');
var Player = require('./models/Player.js');

//Delete Database 
/*Player.remove({}, function(err) { 
  console.log('collection removed') 
});
*/

//install database
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mpg-tn', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/players', express.static(path.join(__dirname, 'dist')));
app.use('/player', player);
//app.use('/scrap', scrap);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;