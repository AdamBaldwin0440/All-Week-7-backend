const express = require("express");

const app = express();

app.use("/books", express.static("books"));
app.use("/books/recommendations", express.static("recommendations"));
app.use("/books/about", express.static("books"));
app.use("/books/contact", express.static("contact"));
app.use("/books/index", express.static("index"))

//line 5-9 redundant.
//only needed /books because that roots to everything in that file
//would only need more /XYZ links if I had more folders
//each folder would need to have it's own index.html for the ./ to find


app.listen(5001, () => console.log("server is listening on port 5001"));