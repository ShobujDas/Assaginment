const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
const books = [];
app.get("/",(req,res)=>{
   res.sendFile(__dirname + "/index.html")

})

app.get("/books",(req,res) =>{
   res.json(books);
});

app.post("/books",(req,res)=>{
   let {title, author,publishedDate} = req.body;
   const id = Math.floor(Math.random() * 10);
   books.push({id, title, author, publishedDate});
   res.json({id,title,author,publishedDate})
});

app.delete("/books/:id", (req, res) => {
   const { id } = req.params;
 
   const bookIndex = books.findIndex((book) => book.id === id);
 
   if (bookIndex >= 0) {
     books.splice(bookIndex, 1);
     res.json({ message: `Book with ID ${id} successfully deleted.` });
   } else {
     res.status(404).json({ message: `Book with ID ${id} not found.` });
   }
 });


 app.use((req, res) => {
   res.sendFile(__dirname + "/error.html");
 });
 
app.listen(3000,()=>{
   console.log("sarver successfully run");
})