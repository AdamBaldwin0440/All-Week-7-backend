const {Router} = require("express");
const bookRouter = Router();
const Book = require("./model"); 

const {getAllBooks} = require("./controllers");

bookRouter.get("/books/allbooks", getAllBooks);

// bookRouter.post("/books/addbook", async (request, response) => {
//     const newBook = await Book.create({
//         title: request.body.title,
//         author: request.body.author,
//         genre: request.body.genre,
//     });
//     const successResponse ={
//         message: "Successfully added to DB",
//         newBook: newBook,
//     };
//     response.send(successResponse)

// });

module.exports = bookRouter;