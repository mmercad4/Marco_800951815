var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb+srv://test:test@blog.q8kku.mongodb.net/posts?retryWrites=true&w=majority', { useNewUrlParser: true });

//create a scheme - this is similar to a blueprint for the data

var postSchema = new mongoose.Schema({
    title: String, content: String
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

    //get data from mongodb and pass it to the view
    app.get('/post', function (req, res) {
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('post', { posts: data })
        });
    });


    //get data from mongodb and pass it to the view
    app.get('/add_post', function (req, res) {
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('add_post', { posts: data })
        });
    });

    //post data from add_post into mongodb
    app.post('/add_post', urlencodedParser, function (req, res) {
        var newPost = Post(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

    //get data from mongodb and pass it to the view
    app.get('/list_posts', function (req, res) {
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('list_posts', { posts: data })
        });
    });

    //Delete data from mongodb
    app.delete('/list_posts/:item', function (req, res) {
        //delete the requested item from Mongodb
        newParam = req.params.item.replace("-", "");
        Post.find({ title: newParam.replace(/\-/g, " ") }).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
};