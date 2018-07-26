const db = require("../models");
// const GameContainer = require("../client/src/components/GameContainer");

module.exports = {
    useFirstConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 1}})
    },
    useSecondConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 2}})
    },
    useThirdConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 3}})
    },
    useFourthConsumable: function(req, res) {
        db.Consumable
        .findOne( {where: {tier: 4}})
        .then()
    }
};