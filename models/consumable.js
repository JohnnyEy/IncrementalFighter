const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consumableSchema = new Schema({
    name: {type: String},
    description: {type: String},
    tier: {type: Number},
    type: {type: String},
    effect: {type: Number},
});

const Consumable = mongoose.model("Consumable", consumableSchema);

module.exports = Consumable;