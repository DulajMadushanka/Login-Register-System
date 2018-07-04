var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');  


passport.use('local',new LocalStrategy({
  
    usernameField:'email',
    passwordField:'password'
},
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) {
        return done(err); }
      if (!user) {
        console.log("incorect username");
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.isValid(password)) {
        console.log('incorect password');
        return done(null, false, { message: 'Incorrect password.' });
      }
     // console.log("hgvghgvh");
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  //console.log("ghhhg");
    done(null, user._id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      //console.log("gghjgj");
      done(err, user);
    });
  });