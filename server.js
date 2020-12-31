var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
 
const Book = require('./app/model/book.model.js');
 
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    
	initial();
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
 
require('./app/route/book.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})

function initial(){
	Book.create({
		title: "Origin",
		author: "Dan Brown",
		description: "Origin thrusts Robert Langdon into the dangerous ntersectio of humankind's two most enduring questions",
		published: "2017"	
	});
	
	Book.create({
		title: "Happy Potter and the Deathly Hallows",
		author: "J.K. Rowling",
		description: "The seventh and final novel of the Harry Potter series.",
		published: "2007"	
	});
	
	Book.create({
		title: "The 100-Year-Old Man Who Climbed Out the Window and Disappeared",
		author: "Jonas Jonasson",
		description: "",
		published: "2009"	
	});
}