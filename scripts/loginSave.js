const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/incDatabase"
);

const loginSave = {
    name: "Matt",
    enemyHealth: 100,
    enemyDamage: 0,
    playerHealth: 100,
    enemiesKilled: 0,
    playerDeaths: 0
    };



db.Save
    .remove({})
    .then(() => db.Save.collection.insert(loginSave))
    .then(data => {
        console.log("--Start Progress Saved!--");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });