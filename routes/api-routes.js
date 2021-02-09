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
    // GET last 7 workouts
    app.get("/api/workouts/range", (req, res) => {
        Plan.find({}).sort({ day: -1 }).exec((err, docs) => {
            if (err) {
                console.log(err);
            } else {
                if (docs.length >= 7) {
                    res.json(docs.slice(0, 7));
                } else {
                    // return all workouts if 
                    // we don't have enough entries
                    res.json(docs);
                }
            }
        });
    });
    // POST for creating new workout
    app.post("/api/workouts", ({ body }, res) => {
        Plan.create(body)
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });
}