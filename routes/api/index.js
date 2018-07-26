const router = require("express").Router();
const saveRoutes = require("./saves");
const consumableRoutes = require("./consumables");

// Routes
router.use("/saves", saveRoutes);
router.use("/consumables", consumableRoutes);

module.exports = router;