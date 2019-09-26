const router = require("express").Router();
const liquids = require("./liquids");



router.use("/liquids",liquids);



module.exports= router;