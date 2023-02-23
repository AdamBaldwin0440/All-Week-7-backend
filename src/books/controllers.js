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

module.exports = {
    getAllBooks,
};

//POST/CREATE logic

//