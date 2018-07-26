const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    email: {type: String},
    enemyHealth: {type: Number},
    enemyDamage: {type: Number},
    playerHealth: {type: Number},
    enemiesKilled: {type: Number},
    playerDeaths: {type: Number},
    bossesBeat: {type: Number}
});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;