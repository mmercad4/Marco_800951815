const express = require('express');
const postController = require('./controllers/postContoller');
const userController = require('./controllers/userController');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require ('cors');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
app.use(cors());
app.use(bodyParser.json());

//fire controllers
postController(app);
userController(app);

//listen to port
app.listen(3000);
console.log('listening to port: 3000');
