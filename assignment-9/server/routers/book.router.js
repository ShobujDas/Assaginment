const express = require('express');
const { bookCreate, bookGet, singleBookGet, singleBookUpdate, singleBookDelete } = require('../controllers/book.controller');
const router = express.Router();


// create a book...
router.post('/books',bookCreate);

// get a all book in database..
router.get('/books',bookGet);

//  get a specific one book by ID in database..
router.get('/books/:id',singleBookGet);

// updata a book by ID in database...
router.put('/books/:id',singleBookUpdate);

// delete a book by ID in database...
router.delete('/books/:id',singleBookDelete);



module.exports = router;