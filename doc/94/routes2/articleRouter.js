const express = require("../kaimo-express");

let router = express.Router(); // 是个构造函数

router.get("/add", function (req, res) {
    res.end("/article-add");
});
router.get("/remove", function (req, res) {
    res.end("/article-remove");
});

module.exports = router;
