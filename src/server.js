const { response } = require("express");
const express = require("express");
require("dotenv").config();
require("./db/connection");

const Book = require("./books/model");
const app = express();
app.use(express.json());

//CREATE-POST - WORKS!!!
app.post("/books/addbook", async (request, response) => {
    //addbook isn't necessary but helps with learning
    const newBook = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
    const successResponse ={
        message: "Successfully added to DB",
        newBook: newBook,
    };
    response.send(successResponse)

});
//Read-GET/find - UNBROKE IT!!!
app.get("/books/allbooks", async (request, response) => {
    console.log(request)
    const allBooks = await Book.find({"genre": "fabulous fiction"})

    console.log(allBooks);

    const successResponse ={
        message: "response sent successfully",
        books: allBooks
    }
    response.send(successResponse)
});
//UPDATE-PUT - UNBROKE IT!

app.put("/books/updatebooks", async (request, response) => {
    const updateBook = await Book.updateOne({title:"Testing"},
    {"genre": "coding problems"}
    );
    const successResponse ={
        message: "response sent successfully",
        update: updateBook
    }
    response.send(successResponse)
    console.log(updateBook.modifiedCount)
})
//seems to be finding the right info but not sure if it's updating?
 
//DELETE - WORKS!!!

app.delete("/books/deletebooks", async (request, response) => {
    const deleteBook = await Book.deleteOne({"title": "example"});
    const successResponse ={
        message: "response sent successfully",
        delete: deleteBook
    }
    response.send(successResponse)
    console.log(deleteBook)
})

app.listen(5001, () => console.log("server is listening on port 5001"));

//WOULD BE IDEAL TO MAKE THEM REUSABLE CODE --> SEE 22/02/23 NOTES



