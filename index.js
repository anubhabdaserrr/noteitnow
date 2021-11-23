const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

function getDateAndTime(){

    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} (${days[date.getDay()]}), ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
    return currDate;
  }

//noteid
let currId = '42342343241489';

//data
// let notes = [
//     {
//         title: "Dear Diary1",
//         content: 'Hello Diary. You\'re my friend1',
//         dateModified: '19-08-2020'
//     },
//     {
//         title: 'Dear Diary2',
//         content: 'Hello Diary. You\'re my friend2',
//         dateModified: '19-08-2021'
//     },
//     {
//         title: 'Dear Diary3',
//         content: 'Hello Diary. You\'re my friend3',
//         dateModified: '19-08-2022'
//     },
//     {
//         title: 'Dear Diary4',
//         content: 'Hello Diary. You\'re my friend4',
//         dateModified: '19-08-2023'
//     }
// ];

//data
const data = require('./public/data.json');
// console.log(data.notes[0]);
// First start mongo : sudo brew services start mongodb-community@5.0 or maybe not sudo
mongoose.connect('mongodb://127.0.0.1:27017/myapp') // or localhost
    .then(() => {
        console.log('Mongoose : Mongo Connection Open.');
    })
    .catch(err => {
        console.log('Mongoose : Mongo Connection Error');
        console.log(err);
    })

app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.redirect('/notes');
})

app.get('/notes', (req, res) => {
    res.render('home',{data});
})

// app.get('/dog', (req, res) => {
//     res.send('WOOF!');
// })

app.post('/notes/new', (req,res)=> {
    // console.log(req.body);
    // console.log(req.body.save);
    // console.log(req.body.update);
    const {noteTitle, noteContent, button} = req.body;
    currId = (parseInt(currId)+1).toString(); 
    note =
        {
            "_id": currId,
            "title": noteTitle,
            "content": noteContent,
            "dateModified": getDateAndTime()
          };
    data.notes.push(note);     
    res.redirect('/notes');
    // console.log(data.notes.slice(-1));
    // console.log(data.notes.slice(-1));
})

app.delete('/notes/:id', (req, res) =>{
    const {id} = req.params;
    // console.log(req.params);
    // const {noteTitle, noteId, noteContent, button} = req.body;
    data.notes = data.notes.filter(c => c._id !== id);
    res.redirect('/notes');
    // console.log(id);
})

app.patch('/notes/:id',(req,res) => {
    const {id} = req.params;
    const note = data.notes.find(c => c._id === id);
    console.log(note);
    note.title = req.body.noteTitle;
    note.content = req.body.noteContent;
    note.dateModified = getDateAndTime();
    // console.log(note);

    res.redirect('/notes');
})
app.get('/aboutus', (req, res) => {
    res.render('aboutus');
})

app.get('/*', (req, res) => {
    res.render('homeInvalidURL');
})

app.listen(3000, () => {
    console.log('Express : App is listening on Port 3000.');
})
