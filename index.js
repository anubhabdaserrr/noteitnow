const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const sortNotesObj = require('./utilities/search');
const Note = require('./models/note');
const userRoutes = require('./routes/userRoutes');
const session = require('express-session');
const flash = require('connect-flash');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


app.listen(3000, () => {
    console.log('Express : App is listening on Port 3000.');
})

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

const sessionConfig = {
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true,
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7
    }
}
app.use(session(sessionConfig));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

//how we store user in session
passport.serializeUser(User.serializeUser());
//how we unstore user in session
passport.deserializeUser(User.deserializeUser());

// app.get('/fakeUser', async (req, res) => {
//     const user = new User({email:'abc@gmail.com', username:'abc'});
//     const newUser = await User.register(user, 'chicken');
//     res.send(newUser);
// })

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.get('/', (req, res) => {
    res.redirect('/login');
    // console.log(req.session.passport);
    // console.log(req.session);
})

app.get('/register', (req,res)=>{
    // if(req.session.passport){
    //     res.redirect('/notes');
    // }
    // else{
        res.render('register');
    // }
})

app.get('/login', (req,res)=>{
    console.log(req.session.passport);
    // if(req.session.passport){
    //     res.redirect('/notes');
    // }
    // else{
        res.render('login');
    // }
})

app.post('/register',async (req,res, next)=>{
    
    try{
        const {email, username, password} = req.body;
        const user = new User({email, username});
        const registeredUser = await User.register(user, password);
        console.log(registeredUser);
        req.login(registeredUser, err => {
            if(err) return next(err);
            req.flash('success', 'Registered !');
            res.redirect('/notes');
        })
    }
    catch(e){
        req.flash('success',e.message);
        res.redirect('register');
    }
})

app.post('/login',passport.authenticate('local', {failureFlash:true,failureRedirect:'/login'}),(req,res)=>{
    req.flash('success','Signed in');
    // console.log(req.user);
    // console.log(req.session.passport);
    res.redirect('/notes');
})

app.use('/notes', userRoutes);

app.get('/logout', (req,res)=>{
    req.logout();
    req.flash('success', 'Logged out');
    res.redirect('login');
})


app.get('/aboutus', (req, res) => {
    res.render('aboutus');
})



app.get('/*', (req, res) => {
    res.render('homeInvalidURL');
})
