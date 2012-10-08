
/**
 * Module dependencies.
 */

var express = require('express')
  , mongodb = require('mongodb')
  , url = require('url')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , config = require('./config')
  , stylus = require('stylus');

var MONGOHQ_URL = process.env.MONGOHQ_URL || "mongodb://<user>:<password>@alex.mongohq.com:10062/app8173016"
var connectionUri = url.parse(MONGOHQ_URL);
var dbName = connectionUri.pathname.replace(/^\//,'');
var app = express();

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

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
