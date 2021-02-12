const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }]
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;