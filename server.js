//connect library ,packages and PORT
const express= require ('express');
const fs = require ('fs');
const path = require ('path');
const app = express ();
const PORT = process.env.PORT || 3001 ;
const util = require ('util');
const db = require ('./db/db.json');
//unid ID 
// const UUID = require ('uniqid');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
//GET notes 

app.get('/api/notes', (req, res) =>{
    res.json(db)

});
app.post ('/api/notes', (req, res) =>{
    db.push(req.body)
    res.json(db)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
});

app.get ('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get ('*', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/index.html'))

});






app.listen(PORT,() =>
console.log (`Listening at http://localhost:${PORT}`)

);