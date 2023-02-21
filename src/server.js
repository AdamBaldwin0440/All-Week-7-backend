const { response } = require("express");
const express = require("express");
const { request } = require("http");

const app = express();

app.use(express.json());

app.get("/book", (request, response) => {
    // console.log(request)
    // response.send("hello from the book route")
    const book = {
        title: "lord of the rings",
        author: "tolkein",
        genre: "fantasy"
    };
    
    const successResponse ={
        message: "response sent successfully",
        book: book,
    };

    response.send(successResponse);
});

app.post("/book", (request, response) => {
    // response.send("Hello from the post route")
    console.log(request.body)
    const newBook = {
        id: Math.floor(Math.random() * 50),
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    };
    const successMessage ={
        message: "Successfully added to DB",
        newBook: newBook,
    };

    response.send(successMessage);

});

app.put("/book", (request,response) =>{
    const book = {
        id: Math.floor(Math.random() * 50),
        title: "Anything",
        author: "Bob the Scribe",
        genre: "Self Help"
    };
    book ["genre"] = request.body.newGenre

   const successMessage ={
        message: "Successfully updated DB",
        updatedBook: book
   };
   response.send(successMessage)
});

app.listen(5001, () => console.log("server is listening on port 5001"));


// app.use("/books", express.static("books"));
// app.use("/books/recommendations", express.static("recommendations"));
// app.use("/books/about", express.static("books"));
// app.use("/books/contact", express.static("contact"));
// app.use("/books/index", express.static("index"))

//line 5-9 redundant.
//only needed /books because that roots to everything in that file
//would only need more /XYZ links if I had more folders
//each folder would need to have it's own index.html for the ./ to find


