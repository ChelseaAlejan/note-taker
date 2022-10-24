const app=require("express").Router()
const fs=require('fs')
let db=require('../db/db.json')

app.get('/notes', (req, res) => {
    db=JSON.parse(fs.readFileSync("./db/db.json"))

    res.json(db)
  });

  app.post("/notes", function(req, res) {
    var newNote = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        text: req.body.text
    };
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err, res) {
        if (err) {
            throw err;
        }
    });
    res.json(db);
});

  module.exports=app