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

var User = mongoose.model('Review', userSchema);

var silence = new User({ email: 'Silence',one: 'no' });
console.log(silence.one); // 'Silence'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user/:email', function(req,res,nex) {
		console.log(req.params.email);
		res.sendStatus(200);

	});

module.exports = router;
