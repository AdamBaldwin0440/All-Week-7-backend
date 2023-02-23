const { response } = require("express");
const Book = require("./model");

//FIND/GET/READ logic
const getAllBooks =  async (request, response) => {
        const allBooks = await Book.find({})
    
        console.log(allBooks);
    
        const successResponse ={
            message: "response sent successfully",
            books: allBooks
        }
        response.send(successResponse)
    };

//PUT/UPDATE logic
const updateBook = async (request, response) => {
    const bookUpdate = await Book.updateOne({title: request.body.title},
            {[request.body.updateKey]:request.body.updateValue}
            );
            const successResponse ={
                message: "Book records updated",
                update: bookUpdate
            }
            console.log("update successful")
            response.send(successResponse)
        }

//POST/CREATE logic
const addNewBook = async (request, response) => {
    const addBook = await Book.create({
                title: request.body.title,
                author: request.body.author,
                genre: request.body.genre,
            });
            const successResponse ={
                message: "Book has been added to DataBase",
                addBook: addBook,
            };
            response.send(successResponse)
        }
//DELETE logic
const deleteBook = async (request, response) => {
    const bookDelete = await Book.deleteOne({
        title: request.body.title
    });
    const successResponse ={
        message: "book has been deleted",
        bookDelete: bookDelete
    }
    response.send(successResponse)
}

//final export section (need to be togther it seems)
    module.exports = {
        getAllBooks,
        updateBook,
        addNewBook,
        deleteBook,
    };

// app.put("/books/updatebooks", async (request, response) => {

//     //     const updateBook = await Book.updateOne({title: request.body.title},
//     //     {[request.body.updateKey]:request.body.updateValue}
//     //     );
//     //     const successResponse ={
//     //         message: "response sent successfully",
//     //         update: updateBook
//     //     }
//     //     console.log(updateBook.modifiedCount)
//     //     response.send(successResponse)
//     // })