const router = require("express").Router();
const saveController = require("../../controllers/saveController");

router.route("/")
    .get(saveController.load)
    .post(saveController.save);

module.exports = router;