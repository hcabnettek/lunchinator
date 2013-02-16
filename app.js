'use strict';
var express = require('express'),
  routes = require('./routes'),
  passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  crypto = require('crypto'),
  map = require('./maproutecontroller'),
  http = require('http'),
  path = require('path'),
  stylus = require('stylus'),
  url = require('url'),
  odm = require('./db'),
  RedisStore = require('connect-redis')(express);

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){ return next();}
  res.redirect('/login');
}

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  odm.User.findById(id, function(err, user){
    if(err) {console.log(err); }
    var deserialized = {
      id: id,
      username: user.UserName,
      password: user.Password
    };

    done(err, deserialized);
  });
});

passport.use(new localStrategy(function(username, password, done){

  odm.User.findOne({UserName: username}, '_id Password Salt UserName Email', function(err, doc){
    if(err) {
      return done(err);
    }

    var newhash = crypto.createHash('sha512')
                    .update(doc.Salt + password)
                    .digest('hex');

    if(doc.Password === newhash){
      var user = {
        id: doc._id,
        username: username,
        password: newhash
      };

      return done(null, user);
    } else {
      return done(null, false, {message: 'Invalid password'});
    }

  });
}));

var app = express();
app.configure(function(){
  var redisUrl = url.parse(process.env.REDISTOGO_URL); //,
     // redisAuth = redisUrl.auth.split(':'); 
  app.set('redisHost', redisUrl.hostname);
  app.set('redisPort', redisUrl.port); 
  //app.set('redisDb', redisAuth[0]);
  //app.set('redisPass', redisAuth[1]);
});

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(stylus.middleware({
    src: '' + __dirname + '/views',
    dest: '' + __dirname + '/public',
    compress: true
  }));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('my super sekret hash'));
  app.use(express.session({
    secret: 'my super sekret hash',
    store: new RedisStore({
      host: app.get('redisHost'),
      port: app.get('redisPort'),
      client: require('redis').createClient()//,
      //db: app.get('redisDb'),
      //pass: app.get('redisPass')
    })
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/partials/:area/:view', routes.partials);

var prefixes = ['user', 'restaurant', 'lunch'];
prefixes.forEach(function(prefix){
  map.mapRoute(app, prefix);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
