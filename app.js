
/**
 * Module dependencies.
 */

var express = require('express')
  , user = require('./routes/user')
  , restaurant = require('./routes/restaurant')
  , http = require('http')
  , path = require('path')
  , config = require('./config')
  , stylus = require('stylus');

var app = express();

require('./db');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(stylus.middleware({
    src: "" + __dirname + "/views",
    dest: "" + __dirname + "/public",
    compress: true
  }));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('my super sekret hash'));
  app.use(express.session({
    secret: 'my super sekret hash'
  }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var routes = require('./routes');

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/restaurants', restaurant.list);
app.post('/restaurants', restaurant.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
