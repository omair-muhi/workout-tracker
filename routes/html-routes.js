// Code adapted from Week-14 Homework - Passport
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {
    // Serve index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Serve stats
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    // Add new exercise to new workout
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // Add new exercise to existing workout -- TODO
};