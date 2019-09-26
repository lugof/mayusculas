const router = require("express").Router();
const liquidsController = require("../../controllers/liquidsController");


router.route(`/getCapitals/:capitals`).get(liquidsController.getCapitals);

module.exports = router;