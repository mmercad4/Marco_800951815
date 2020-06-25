var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb+srv://test:test@blog.q8kku.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true });

//create a scheme - this is similar to a blueprint for the data

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

var Users = mongoose.model('Users', userSchema);


module.exports = function (app) {

    /*     app.post('/add_user', async (req, res) => {
            const user = new Users({
                username: req.body.username,
                password: req.body.password
            });
            try {
                const savedPost = await post.save();
                res.json(savedPost);
    
            }
            catch (err) {
                res.json({message:err});
            }
        }) */

    //GETS LIST OF USERS
    app.get('/list_user', async (req, res) => {
        try {
            const users = await Users.find();
            res.json(users);

        }
        catch (err) {
            res.json({ message: err });
        }
    })

    //SUBMITS A USER
    app.post('/add_user', async (req, res) => {
        const user = new Users({
            username: req.body.username,
            password: req.body.password
        });
        try {
            const savedUser = await user.save();
            res.json(savedUser);

        }
        catch (err) {
            res.json({ message: err });
        }
    });

    //GETS SPECIFIC USER
    app.get('/list_user/:userId', async (req, res) => {
        try {
            const user = await Users.findById(req.params.userId);
            res.json(user);
        }
        catch (err) {
            res.json({ message: err })
        }
    });

    //REMOVES SPECIFIC USER
    app.delete('/delete_user/:userId', async (req, res) => {
        try {
            const removedUser = await Users.remove({ _id: req.params.userId });
            res.json(removedUser);
        }
        catch (err) {
            res.json({ message: err })
        }
    });

    //EDITS A SPECIFIC USER
    app.patch('/edit_user/:userId', async (req, res) => {
        try {
            const updatedUser = await Users.updateOne(
                { _id: req.params.userId },
                { $set: { password: req.body.password } });
            res.json(updatedUser);
        }
        catch (err) {
            res.json({ message: err })
        }
    });

};