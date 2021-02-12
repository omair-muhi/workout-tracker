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
                res.json(docs);
            }
        });
    });
    // GET last 7 workouts
    app.get("/api/workouts/range", (req, res) => {
        console.log("Get last 7 workouts")
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
        console.log("Create new workout!");
        Plan.create(body)
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // PUT for creating new workout
    app.put("/api/workouts/:id", (req, res) => {
        console.log("Create new exercise!");
        Exercise.create(req.body)
            .then(({ _id }) => Plan.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: _id } }, { new: true }))
            .then(dbWorkout => {
                console.log("New Exercise Duration", req.body.duration);
                console.log("Current Total Duration:", dbWorkout.totalDuration);
                let newTotalDuration = req.body.duration + dbWorkout.totalDuration;
                console.log("New Total Duration:", newTotalDuration);
                Plan.findOneAndUpdate({ _id: req.params.id }, { totalDuration: newTotalDuration }, (err, plan) => {
                    if (err) console.log(err);
                    res.json(plan);
                });
            })
            .catch(err => {
                res.json(err);
            });
    });
}