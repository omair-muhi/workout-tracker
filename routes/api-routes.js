// Code adapted from Week-14 Homework
var Exercise = require("../models/Exercise.js");
var Plan = require("../models/Plan.js");

module.exports = function(app) {
    // GET last workout-plan
    app.get("/api/workouts", (req, res) => {
        Plan.find({}).sort({ day: -1 }).exec((err, docs) => {
            if (err) {
                console.log(err);
            } else {
                res.json(docs[0]);
            }
        });
    });
}