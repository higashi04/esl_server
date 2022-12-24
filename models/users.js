const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    profileType: String,
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
    active: Boolean,
    lessons: [
        {
            type: Schema.Types.ObjectId,
            ref: "Lessons"
        }
    ],
    teacher: {
        id: String
    },
    students: [{
        id: String
    }]
})

module.exports = mongoose.model('User', UserSchema);