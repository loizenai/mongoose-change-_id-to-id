const Book = require('../model/book.model.js');

// FETCH all Books
exports.findAll = (req, res) => {
    Book.find()
    .then(books => {		
		let returnedBooks = [];
		
		for (let i = 0; i < books.length; i++) {
			returnedBooks.push(books[i].transform());
		}
		
		res.send(returnedBooks);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// FIND a Book
exports.findOne = (req, res) => {
    Book.findById(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });            
        }

        res.send(book.transform());
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Book with id " + req.params.bookId
        });
    });
};