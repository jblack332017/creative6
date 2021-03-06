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
    four: String
});

var User = mongoose.model('User', userSchema);

var silence = new User({ email: 'Silence',one: 'no' });
console.log(silence.one); // 'Silence'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thecakeisalie/:email', function(req, res, next) {
  	User.findOne({ email: req.params.email }, function (err, doc){
  doc.two = 'yes';
  doc.save();

});
User.findOne({ email: req.params.email }, function (err, userInfo){
  jsonObj = [];

				if (userInfo.one=="yes")
				{
					item = {};
					item["link"] = "<a href='challenge1.html' class='w3-btn'>One</a>"
					jsonObj.push(item);
				}
				if (userInfo.two=="yes")
				{
					item = {};
					item["link"] = "<a href='challenge2.html' class='w3-btn'>Two</a>"
					jsonObj.push(item);
				}
				if (userInfo.three=="yes")
				{
					item = {};
					item["link"] = "<a href='challenge3.html' class='w3-btn'>Three</a>"
					jsonObj.push(item);
				}
				res.json(jsonObj);
});


});

router.get('/mywayout/:email', function(req, res, next) {
  	 User.findOne({ email: req.params.email }, function (err, doc){
        doc.three = 'yes';
        doc.save();
    });

    res.sendStatus(200);
});

router.get('/foundMyKey/:email', function(req, res, next) {
  	 User.findOne({ email: req.params.email }, function (err, doc){
        doc.four = 'yes';
        doc.save();
    });
  res.sendStatus(200);
});



router.get('/user/:email', function(req,res,nex) {
		console.log(req.params.email);

		User.find({ 'email': req.params.email }, function(err,userList) { //Calls the find() method on your database
		  	var userInfo;
		  	if (err) return console.error(err); //If there's an error, print it out
		  else {
			    console.log(userList); //Otherwise console log the comments you found
				if (userList.length>0){
					console.log("returning user");
					//res.json(userList); //Then send the users
					userInfo = userList[0];
					console.log(userInfo.two);

				}
				else{
					console.log("new User");
					var userString = {email: req.params.email,one: "yes",two:"no",three:"no"};
					var userJSON = JSON.stringify(userString);
					console.log(userJSON);
					var user = new User({email: req.params.email,one: "yes",two:"no",three:"no",four:"no"});
					console.log(user.two)
					userInfo = user;
					user.save(function (err, fluffy) {
					  if (err) return console.error(err);
					  //res.json(userJSON);

					});

				}
				jsonObj = [];

				if (userInfo.one=="yes")
				{
					item = {};
					item["link"] = "<a href='challenge1.html' class='w3-btn'>One</a>"
					jsonObj.push(item);
				}
				if (userInfo.two=="yes")
				{
					item = {};
					item["link"] = "<a href='challenge2.html' class='w3-btn'>Two</a>"
					jsonObj.push(item);
				}
				if (userInfo.three=="yes")
				{
					item = {};
					item["link"] = "<a href='challenge3.html' class='w3-btn'>Three</a>"
					jsonObj.push(item);
				}
                if (userInfo.four=="yes")
				{
					item = {};
					item["link"] = "<a href='challenge4.html' class='w3-btn'>Four</a>"
					jsonObj.push(item);
				}
				res.json(jsonObj);

    		}


	});
});

module.exports = router;
