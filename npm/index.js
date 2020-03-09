 const express = require('express');
 const app = express();

 app.get('/', (req,res) => {
     res.send("Home Page");
 });

 app.get('/about', (req,res) => {
    res.send("About page");
});

 app.listen(8000, () => {
     console.log("listening on port 8000");
 })