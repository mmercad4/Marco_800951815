var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb+srv://test:test@blog-hd4m3.mongodb.net/posts?retryWrites=true&w=majority', { useNewUrlParser: true });

//create a scheme - this is similar to a blueprint for the data

var postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
});

var Post = mongoose.model('Posts', postSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/test', async (req, res) => {
        try {
            const post = await Post.find();
            res.json(post);

        }
        catch (err) {
            res.json({ message: err });
        }
    })

    app.get('/index', function (req, res) {
        //get data from mongodb and pass it to the view
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('index', { posts: data })
        });

    });

    //Posting content
    app.get('/add_post', function (req, res) {
        Post.find({}, function (err, data) {
            if (err) throw err;
            res.render('add_post', { posts: data })
        });
    });

    app.post('/add_post', urlencodedParser, async (req, res) => {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content
        });

        try {
            console.log(req.body);
            const savedPost = await newPost.save();
            res.json(savedPost);

        }
        catch (err) {
            res.json({ message: err });
        }
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

/*     app.get("/post/:item", async (req, res) => {
        try {
          const post = await Post.findOne({ title: req.params.item });
          res.json({
            title: post.title,
            content: post.content,
          });
        } catch (err) {
          res.json({ message: err });
        }
      }); */

      app.get('/post ')


      app.get("/post", function (req, res) {
        Post.find({}, function (err, data) {
          if (err) throw err;
          res.render("post", { posts: data });
        });
      });
};