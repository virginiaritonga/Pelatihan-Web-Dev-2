const express = require('require');
const app = express();

app.set('view engine', 'ejs');
app.get('/',(req,res) => {
    res.render('home', {data: "Sebuah data"});
});

app.listen(8000, () => {
    console.log("listening on port 8000");
})