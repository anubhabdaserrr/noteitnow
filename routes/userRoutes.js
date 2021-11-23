const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const sortNotesObj = require('../utilities/search');
const Note = require('../models/note');
const {isLoggedIn} = require('../middleware')
// router.use((req,res,next)=>{
//     if (req.query.isAdmin) {
//         next();
//     }
//     res.send('Sorry not an admin');
// })


function getDateAndTime(){

    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} (${days[date.getDay()]}), ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
    return currDate;
  }

router.get('/', isLoggedIn, async (req, res) => {
    console.log("refresh notes",req.user);
    const notes = await Note.find({ 'userId': req.user._id });
    res.render('home',{data:notes});
})

router.get('/search', isLoggedIn, async (req, res) => {
    const notes = await Note.find({ 'userId': req.user._id });
    let sortedNotes = sortNotesObj(notes, req.query.searchQuery).slice().reverse();
    res.render('home',{data:sortedNotes});
})

//associated
router.patch('/:id', isLoggedIn, async (req,res) => {
    const {id} = req.params;
    const note = {
        title: req.body.noteTitle,
        content: req.body.noteContent,
        dateModified: getDateAndTime(),
        userId: req.user._id
    };
    const editedNote = await Note.findByIdAndUpdate(id, note, {runValidators: true, new: true});
    req.flash('success','Note updated');
    res.redirect('/notes');
})


//associated
router.post('/new', isLoggedIn, async (req,res)=> {
    const {noteTitle, noteContent, button} = req.body;
    const newNote = new Note({
        title : noteTitle,
        content : noteContent,
        dateModified: getDateAndTime(),
        userId: req.user._id
    });
    await newNote.save()
    req.flash('success','Note saved');
    console.log(newNote);
    res.redirect('/notes');

})

//associated
router.delete('/:id', isLoggedIn, async (req, res) =>{
    const {id} = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    req.flash('success','Note deleted');
    res.redirect('/notes');
})

// router.get('/aboutus', isLoggedIn, (req, res) => {
//     res.render('aboutus');
// })

router.get('/aboutus', isLoggedIn, (req, res) => {
    res.redirect('/aboutus');
})


router.get('/logout', (req,res)=>{

    console.log("Logout",req.user);
    req.logout();
    console.log("Logout",req.user);
    req.flash('success', 'Logged out');
    res.redirect('/login');
})

router.get('/*', (req, res) => {
    
    if(req.user){
        const btns = {btns:['/notes']};
        console.log(btns);

        res.render('homeInvalidURL',{btns:btns});
    }
    else{
        const btns = {btns:['/login', '/register']};
        console.log(btns);

        res.render('homeInvalidURL',{btns:btns});
    }
})

module.exports = router;