const express = require("express"),
	router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
	res.json({ msg: "Hello World!" });
});

module.exports = router;
