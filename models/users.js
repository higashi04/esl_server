const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    profileType: {
        type: String,
        required: true,
        enmum: ["Alumno", "Maestro"],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dateOfBirth: {
        type: Date
    },
    active: Boolean
})

module.exports = mongoose.model('User', UserSchema);