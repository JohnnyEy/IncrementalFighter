const router = require("express").Router();
const consumableController = require("../../controllers/consumableController");

router.route("/")
    .get(consumableController.useFirstConsumable)
    .get(consumableController.useSecondConsumable)
    .get(consumableController.useThirdConsumable)
    .get(consumableController.useFourthConsumable);

module.exports = router;