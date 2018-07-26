// import React, { Component } from "react";
const db = require("../models");

module.exports = {
    save: function (req, res) {
        console.log("req: " + JSON.stringify(req.body.email));
        db.Save
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch (err => res.status(422).json(err));
    },
    load: function (req, res) {
        console.log(req.query.q);
        db.Save
        .find({email: req.query.q})
            .then(dbModel => res.json(dbModel))
            .then(console.log("load ping"))
            .catch(err => res.status(422).json(err));
    }
};

