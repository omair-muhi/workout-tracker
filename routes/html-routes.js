// Code adapted from Week-14 Homework - Passport
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};