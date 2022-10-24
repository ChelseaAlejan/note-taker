const express = require('express');
const path = require('path');
const html=require("./routes/html")
const api=require('./routes/api.js')
const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api',api)
app.use('/',html)




app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});