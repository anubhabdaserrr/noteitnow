module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'You must be logged in to view the contents');
        return res.redirect('/login');
    }
    next();
}