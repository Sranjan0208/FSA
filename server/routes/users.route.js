const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

router.post("/", usersController.Signup);
router.get("/get-user", usersController.GetUser);

module.exports = router;
