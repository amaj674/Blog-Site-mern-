'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
var pino = require('pino')();
var MongoStore = require('connect-mongo')(session);
var Blog = require('./model/blogs');
var app = express();
var router = express.Router();
pino.debug('Starting the MERN example');
// user set variables
const port = process.env.API_PORT || process.env.PORT || 3001;
const mongoURL = 'localhost/blogs';
const mongoUser = process.env.MONGO_USER || '';
const mongoPass = process.env.MONGO_PASS || '';
const staticDir = process.env.STATIC_DIR || 'build';

// connect to the MongoDB
let mongoConnect = 'mongodb://localhost:27017'
if (mongoURL !== '' && mongoUser !== '' && mongoPass != '') {
  mongoConnect = `mongodb://${mongoUser}:${mongoPass}@${mongoURL}`;
} else if (mongoURL !== '') {
  mongoConnect = `mongodb://${mongoURL}`;
}

pino.info(`Connect to ${mongoConnect}`);

mongoose.Promise = global.Promise;
mongoose.connect(mongoConnect)
  .catch((err) => {
	  console.log('39');
    if (err) pino.error('39 '+ err);
  });

var db = mongoose.connection;
db.on('error', (error) => {
	console.log('45');
  pino.error('44' + error);
});

// set up other middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var sess = {
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  name: 'mern example',
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {}
};

// production only middleware
if (process.env.NODE_ENV == 'production') {
	console.log('62');
  pino.info('Using production mode');
  var compression = require('compression');
  app.use(compression());

  app.use(express.static(staticDir));

  app.set('trust proxy', 1); // trust the first proxy
  sess.cookie.secure = true;

  app.use(morgan('combined'));
}

app.use(session(sess));


router.get('/', function (req, res) {
  res.json({ message: 'API initialized' })
})

router.route('/blogs')
  .get(function (req, res) {
    Blog.find(function (err, blogs) {
      if (err)
        res.send(err);
      res.json(blogs);
    });
  })
  .post(function (req, res) {

    const text = req.body.text;
    const author = req.body.author;
    const blog_title = req.body.blog_title;
    const imageURL =req.body.imageURL;
    console.log('98 ::=>'+ req.body.blog_title)
    if (!blog_title || !text || !author  || !imageURL) {
      res.json({ message: 'Data Inconsitancy' });
      return
    }

    const blog = new Blog( 
      {
		blog_title:blog_title,  
        author: author,
        text: text,
        posted_on: new Date(Date.now()).toLocaleString(),
        imageURL: imageURL
      }
    );

    blog.save(function (err) {
      if (err)
        res.send(err);
      res.json({ message: 'blog successfully added!' })
    });
  });

router.route('/blogs/:blog_id')
  .put(function (req, res) {

  })
  .delete(function (req, res) {
    Blog.remove({ _id: req.params.blog_id }, function (err, blog) {
      if (err)
        res.send(err);
      res.json({ message: 'Blog has been deleted' })
    });
  });

router.post('/blogs/logout', (req, res) => {

  req.session.destroy();
  console.log('133');
  pino.info('Logged out');

  res.json({ message: 'Successfully logged out' });
});

router.post('/blogs/login', (req, res) => {
  const author = req.body.author;
  
  const imageURL = req.body.imageURL;
console.log('143');
  pino.info(`Received sign in request from ${author}, ${imageURL}`);

  req.session.author = author;
  
  req.session.imageURL = imageURL;

  res.json({ message: 'Successfully logged in' });

});

router.get('/blogs/session', (req, res) => {
  res.json({
    author: req.session.author,
   
    imageURL: req.session.imageURL
  });
});

app.use('/api', router);

app.listen(port, function () {
	console.log('165');
  pino.info(`api running on port ${port}`);
});


