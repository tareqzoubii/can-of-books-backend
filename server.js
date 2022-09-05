'use strict'

const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());
require('dotenv').config();
const mongoose = require('mongoose') // step 0 (import the mongoose!)

const BookModel = require('./Books.js')
const PORT = process.env.PORT || 3888;


// mongoose config step 1 connect mongose with DataBase!
mongoose.connect('mongodb://localhost:27017/booksApp', {useNewUrlParser: true, useUnifiedTopology: true});

//Routes Section 
server.get('/', homeHandler);
server.get('/getBooks', booksHandler);


//Function Section
// http:localhost:3888/
function homeHandler(req, res) {
    res.send("This is the Home Route")
    //console.log("HELLO!, This is the Home Route")
}

// http:localhost:3888/getBooks
function booksHandler(req, res){
    BookModel.find({}, (err, result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
            res.send(result)
        }
    })


}
server.listen(PORT, () => {
    console.log(`Hello, this is PORT --> ${PORT}`);
})

// Commit