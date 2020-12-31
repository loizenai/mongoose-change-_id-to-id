const mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var bookSchema = new Schema({
    title: String,
    author: String,
	description: String,
	published: String	
});

bookSchema.method('transform', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

module.exports = mongoose.model('Book', bookSchema); 