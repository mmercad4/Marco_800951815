var express = require('express');
var postController = require('./controllers/postContoller');
var userController = require('./controllers/userController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));


//fire controllers
postController(app);
userController(app);

//listen to port
app.listen(3000);
console.log('listening to port: 3000');