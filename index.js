//run this file with caution. It has access to the entire DB
// since user logic not created
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const sortNotesObj = require('./utilities/search');
const Note = require('./models/note');

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
mongoose.connect('mongodb://127.0.0.1:27017/noteitnowdb') // or localhost
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

// app.get('/notes', (req, res) => {
//     res.render('home',{data});
// })

// app.get('/dog', (req, res) => {
//     res.send('WOOF!');
// })

app.post('/notes/new', async (req,res)=> {
    // console.log(req.body);
    // console.log(req.body.save);
    // console.log(req.body.update);
    const {noteTitle, noteContent, button} = req.body;

    // currId = (parseInt(currId)+1).toString(); 
    // note =
    //     {
    //         "_id": currId,
    //         "title": noteTitle,
    //         "content": noteContent,
    //         "dateModified": getDateAndTime()
    //       };
    // data.notes.push(note);     
    // res.redirect('/notes');

    // console.log(data.notes.slice(-1));
    // console.log(data.notes.slice(-1));

    const newNote = new Note({
        title : noteTitle,
        content : noteContent,
        dateModified: getDateAndTime()
    });
    await newNote.save()
    console.log(newNote);
    res.redirect('/notes');

})

app.delete('/notes/:id', async (req, res) =>{
    const {id} = req.params;
    // console.log(req.params);
    // const {noteTitle, noteId, noteContent, button} = req.body;

    // data.notes = data.notes.filter(c => c._id !== id);

    const deletedNote = await Note.findByIdAndDelete(id);
    console.log(deletedNote);

    res.redirect('/notes');
    // console.log(id);
})

app.patch('/notes/:id', async (req,res) => {
    const {id} = req.params;

    // const note = data.notes.find(c => c._id === id);
    // console.log(note);
    // note.title = req.body.noteTitle;
    // note.content = req.body.noteContent;
    // note.dateModified = getDateAndTime();
    // // console.log(note);

    const note = {
        title: req.body.noteTitle,
        content: req.body.noteContent,
        dateModified: getDateAndTime()
    };

    const editedNote = await Note.findByIdAndUpdate(id, note, {runValidators: true, new: true});

    console.log(editedNote);

    res.redirect('/notes');
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus');
})

// app.get('/notes/', (req,res)=>{
//     res.redirect('/notes');
// })

app.get('/notes', async (req, res) => {
    const notes = await Note.find({});
    // console.log(notes);
    // res.send(notes);
    res.render('home',{data:notes});
})

app.get('/notes/search', async (req, res) => {
    const notes = await Note.find({});
    // console.log(req.query.searchQuery);
    // res.send('search working');
    let sortedNotes = sortNotesObj(notes, req.query.searchQuery).slice().reverse();
    res.render('home',{data:sortedNotes});
})


app.get('/*', (req, res) => {
    res.render('homeInvalidURL');
})

app.listen(3000, () => {
    console.log('Express : App is listening on Port 3000.');
})
