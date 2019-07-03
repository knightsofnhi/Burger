const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", function (req, res){
    res.json("Hello")
});
module.exports = router;