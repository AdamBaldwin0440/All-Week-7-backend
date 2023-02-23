const { response } = require("express");
const Book = require("./model");

//FIND/GET/READ logic
// const getAllBooks =  async (request, response) => {
//         const allBooks = await Book.find({})
    
//         console.log(allBooks);
    
//         const successResponse ={
//             message: "response sent successfully",
//             books: allBooks
//         }
//         response.send(successResponse)
//     };

//     module.exports = {
//         getAllBooks,
//     };

//POST/CREATE logic
const updateBook = async (request, response) => {
    const bookUpdate = await Book.updateOne({title: request.body.title},
            {[request.body.updateKey]:request.body.updateValue}
            );
            const successResponse ={
                message: "response sent successfully",
                update: bookUpdate
            }
            console.log("update successful")
            response.send(successResponse)
        }

    module.exports = {
        updateBook,
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