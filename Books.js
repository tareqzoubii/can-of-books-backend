'use strict'

const mongoose = require('mongoose')

// defining a schema! with valid keys --> making a structure!
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String
  });

  //using schema to craft a Book Model!
  const BookModel = mongoose.model('books', bookSchema); 

// seed data (to insert initial data for this lab!)
async function seedData(){

const firstBook = new BookModel({
  title: "All We Know: Three Lives",
  description:
    "Erudite and exquisitely written, Wesleyan professor Cohen's first book, a triptych biography of three early-20th-century women—Esther Murphy, Mercedes de Acosta, and Madge Garland—successfully renders both these memorable and surprising personalities and the era in which they struggled with questions and expectations regarding career, marriage, and sexuality. Suitably dishy and remarkably humane, the book leaves readers wondering who these women would have become in a more progressive society.",
  status:
    "Already one of the best writers working, Atkinson just gets better and better.",
});

const secondBook = new BookModel({
  title: "The Lord of the Rings",
  description:
    "Tolkiens fantasy epic is one of the top must-read books out there. Set in Middle Earth  a world full of hobbits, elves, orcs, goblins, and wizards  The Lord of the Rings will take you on an unbelievable adventure..",
  status: "by J.R.R. Tolkien",
});

const thirdBook = new BookModel({
  title: "The Kite Runner",
  description:
    "The Kite Runner is a moving story of an unlikely friendship between a wealthy boy and the son of his fathers servant. Set in Afghanistan during a time of tragedy and destruction, this unforgettable novel will have you hooked from start to finish",
  status: "by Khaled Hosseini",
});


await firstBook.save();
await secondBook.save();
await thirdBook.save();
}
//seedData();

module.exports=BookModel

//commit!