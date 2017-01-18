var express = require('express');

var router = express.Router();

router.get("/:numberOfSides", function (req, res) {
    const minimum = 1;
    const maximum = req.params.numberOfSides;
    let randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return res.json({"result": randomNumber})
});

module.exports = router;