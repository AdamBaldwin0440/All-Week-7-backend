const express = require("express");
require("dotenv").config();
require("./db/connection");

const Book = require("./books/model");
const app = express();
app.use(express.json());

const bookRouter = require("./books/routes")

//CREATE-POST - WORKS!!!
// app.post("/books/addbook", async (request, response) => {
//     //addbook isn't necessary but helps with learning
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
//Read-GET/find - UNBROKE IT!!!
app.use(bookRouter); //using a router instead now

//**Old server code now in controllers.js**
// app.get("/books/allbooks", async (request, response) => {
//     console.log(request)
//     const allBooks = await Book.find({})

//     console.log(allBooks);

//     const successResponse ={
//         message: "response sent successfully",
//         books: allBooks
//     }
//     response.send(successResponse)
// });



//UPDATE-PUT - UNBROKE IT!

app.put("/books/updatebooks", async (request, response) => {

    const updateBook = await Book.updateOne({title: request.body.title},
    {[request.body.updateKey]:request.body.updateValue}
    );
    const successResponse ={
        message: "response sent successfully",
        update: updateBook
    }
    console.log(updateBook.modifiedCount)
    response.send(successResponse)
})
//seems to be finding the right info but not sure if it's updating?
 
//DELETE - WORKS!!!

app.delete("/books/deletebooks", async (request, response) => {
    const deleteBook = await Book.deleteOne({"title": request.body.title});
    const successResponse ={
        message: "response sent successfully",
        delete: deleteBook
    }
    console.log(deleteBook)
    response.send(successResponse)
    
})

app.listen(5001, () => console.log("server is listening on port 5001"));

//WOULD BE IDEAL TO MAKE THEM REUSABLE CODE --> SEE 23/02/23 NOTES



