var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
const multer = require('multer');
const { text } = require('body-parser');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage});

//connect to the database
mongoose.connect('mongodb+srv://test:test@blog-hd4m3.mongodb.net/posts?retryWrites=true&w=majority', { useNewUrlParser: true });

//create a scheme - this is similar to a blueprint for the data

var postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, 
    content: {
        type: String}
});

var Post = mongoose.model('Posts', postSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/index', function (req, res) {
        //get data from mongodb and pass it to the view
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('index', { posts: data })
        });

    });

    app.get('/post', function (req, res) {
        //get data from mongodb and pass it to the view
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('post', { posts: data })
        });
    });

    //Posting content
    app.get('/add_post', function (req, res) {
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('add_post', { posts: data })
        });
    });

    app.post('/add_post', upload.single('content'),urlencodedParser, function (req, res) {
        console.log(req.file);
        var newPost = Post(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

    //Deleting content
    app.get('/list_posts', function (req, res) {
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('list_posts', { posts: data })
        });
    });

    app.delete('/list_posts/:item', function (req, res) {
        //delete the requested item from Mongodb
        newParam = req.params.item.replace("-", "");
        Post.find({ title: newParam.replace(/\-/g, " ") }).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
};