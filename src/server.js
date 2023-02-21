const express = require("express");
require("dotenv").config();
require("./db/connection");

const Book = require("./books/model");

const app = express();

app.use(express.json());

app.get("/books"), async (request, response) => {
    // console.log(request)
    // const allBooks = await Book.find({})

    // console.log(allBooks);

    // const successResponse ={
    //     message: "response sent successfully",
    //     books: allBooks
    // }
    // response.send(successResponse)
response.send("Hello")
}



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

// app.put("/book", (request,response) =>{
//     const book = {
//         id: Math.floor(Math.random() * 50),
//         title: "Anything",
//         author: "Bob the Scribe",
//         genre: "Self Help"
//     };
//     book ["genre"] = request.body.newGenre

//    const successMessage ={
//         message: "Successfully updated DB",
//         updatedBook: book
//    };
//    response.send(successMessage)
// });

app.listen(5002, () => console.log("server is listening on port 5001"));


// app.use("/books", express.static("books"));
// app.use("/books/recommendations", express.static("recommendations"));
// app.use("/books/about", express.static("books"));
// app.use("/books/contact", express.static("contact"));
// app.use("/books/index", express.static("index"))

//line 5-9 redundant.
//only needed /books because that roots to everything in that file
//would only need more /XYZ links if I had more folders
//each folder would need to have it's own index.html for the ./ to find


