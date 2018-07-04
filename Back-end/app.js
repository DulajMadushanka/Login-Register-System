//importing moduls
var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');  
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');



var app = express();

app.use(cookieParser());

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//adding middleware - cors
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));



//connect to mongodb
mongoose.connect('mongodb://localhost:27017/sales');

//on connection
mongoose.connection.on('connected',function(){
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('connected',function(err){
    if(err){
        console.log('error in database connection: '+err);
    }
});

//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    name:'myname.sid',
    resave:false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
        maxAge:36000000,
        httpOnly:false,
        secure:false
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
var paass  = require('./passport-config');

app.use(passport.initialize());
app.use(passport.session());






//body parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/',indexRouter);
app.use('/users',usersRouter);

//port no
const port = 8000;
app.listen(port,function(){
    console.log("server is ready to"+port);
});

//testing server
app.get('/',function(req,res){
    res.send('foobar');
})