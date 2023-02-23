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
//DELETE logic - delete ONE
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

//DELETE(MANY)
const deleteManyBooks = async (request, response) => {
    const deleteMulti = await Book.deleteMany({
        author: request.body.author
    })
    const successResponse ={
        message: "Matching books have been deleted",
        bookDelete: deleteMulti
    }
    response.send(successResponse)
}

//GET single attempt
const getOneBook = async (request, response) =>{
    const getOne = await Book.findOne({
        title: request.body.title
    })
        const successResponse ={
        message: "The book you want has been found",
        getOne: getOne
    }
    response.send(successResponse)
};

// await Adventure.findOne({ country: 'Croatia' }).exec();
// const getAllBooks =  async (request, response) => {
//     const allBooks = await Book.find({})

//     console.log(allBooks);

//     const successResponse ={
//         message: "response sent successfully",
//         books: allBooks
//     }
//     response.send(successResponse)
// };



//final export section (need to be togther it seems)
    module.exports = {
        getAllBooks,
        updateBook,
        addNewBook,
        deleteBook,
        deleteManyBooks,
        getOneBook,
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