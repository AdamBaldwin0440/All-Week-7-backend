// const express = require("express");
// require("dotenv").config();
// require("./db/connection");

// const Book = require("./books/model");

// const app = express();

// app.use(express.json());

// app.get("/books"), async (request, response) => {
//     console.log(request)
//     const allBooks = await Book.find({})

//     console.log(allBooks);

//     const successResponse ={
//         message: "response sent successfully",
//         books: allBooks
//     }
//     response.send(successResponse)
// }