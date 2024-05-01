const express = require("express");
router = express();

usersRoute = require("../controllers/usersController");

router.get("/", usersRoute.usersController);

module.exports = router;
