module.exports = function(app) {
 
    const books = require('../controller/book.controller.js');
	
    // Retrieve all Books
    app.get('/api/books', books.findAll);
 
    // Retrieve a single Book by Id
    app.get('/api/books/:bookId', books.findOne);
}