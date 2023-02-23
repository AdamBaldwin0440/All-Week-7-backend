const {Router} = require("express");
const bookRouter = Router();

const {addNewBook, getAllBooks, updateBook, deleteBook, deleteManyBooks} = require("./controllers");
// const { deleteMany } = require("./model"); //I didn't import this?

bookRouter.post("/books/addbooks", addNewBook);
bookRouter.get("/books/allbooks", getAllBooks);
bookRouter.put("/books/updatebooks", updateBook);
bookRouter.delete("/books/deletebooks", deleteBook);
bookRouter.delete("/books/deletemanybooks", deleteManyBooks)

//bookRouter.get AND bookRouter.put both work in isolation
//why not together? bookRouter only usable once?

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