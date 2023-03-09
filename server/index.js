import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
    host:"localHost",
    user:"root",
    password:"",
    database:"online-book-store"
})

app.get("/", (req, res)=>{
    res.json("this is backend")
})

app.get("/books", (req, res)=>{
    const q = "SELECT * FROM books"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json("books are success fully loaded")
    })
})

app.post("/books", (req, res)=>{
    const q = "INSERT INTO books ('title', 'description', 'cover') VALUES (?)";
    const values = [req.body.title, 
        req.body.cover, 
        req.body.description];
}

)

app.listen(3005, ()=>{
    console.log("connected to backend");
})