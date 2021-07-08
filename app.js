var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// mongoose.connect('mongodb://localhost/mern-crud', { useMongoClient: true, promiseLibrary: require('bluebird') })
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

const MONGODB_URI="mongodb+srv://SreyaSalil:sreyasalil1805@cluster0.uniyu.mongodb.net/mern-crud?retryWrites=true&w=majority"
const PORT=process.env.PORT||8888;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology:true} )
.then(()=>console.log(`Server connected at port ${PORT}`))
.catch(e => {
console.error('Connection error!!!!!', e.message)
})

mongoose.set('useFindAndModify',false);

const db = mongoose.connection

var book = require('./routes/book');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/book', book);

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
  res.send('error');
});

module.exports = app;
