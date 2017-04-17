var express = require('express');
var router = express.Router();


var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/challenge');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var userSchema = mongoose.Schema({
    email: String,
    one: String,
    two: String,
    three: String,
});

var User = mongoose.model('User', userSchema);

var silence = new User({ email: 'Silence',one: 'no' });
console.log(silence.one); // 'Silence'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/:email', function(req,res,nex) {
		console.log(req.params.email);
		
		User.find({ 'email': req.params.email }, function(err,userList) { //Calls the find() method on your database
		  	if (err) return console.error(err); //If there's an error, print it out
		  else {
		    console.log(userList); //Otherwise console log the comments you found
			res.json(userList); //Then send the comments
    
    
			  }
			})


	});

module.exports = router;
