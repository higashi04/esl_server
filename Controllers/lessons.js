const User = require("../models/users");
const Lesson = require("../models/lessons");

const saveLesson = async(req, res) => {
    try {
        const {title, level, url, creatorId} = req.body;
        const teacher = await User.findById(creatorId);
        if(teacher.profileType !== "Teacher") {
            res.status(500);
            throw new Error("User can't create lessons")
        }
        const newLesson = await Lesson.create({
            title,
            level,
            url,
            teacher : creatorId
        })
        if(newLesson) {
            res.status(201).json({
                _id: newLesson._id
            })
        }
    } catch (error) {
        res.send(error)
    }
};

const fetchLessons = async(req, res) => {
    try {
        const lessons = await Lesson.find({
            teacher: req.body.user
        });
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    saveLesson,
}