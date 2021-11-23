const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true // not validation, it sets up an index
    }
});
UserSchema.plugin(passportLocalMongoose); 
// ^ Adds username, password, usernames not duplicated

module.exports = mongoose.model('User', UserSchema);