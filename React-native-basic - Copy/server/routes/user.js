const express = require("express");
const { register, login, loadUser } = require("../controllers/user");
const {isAuthenticated} = require("../middlewares/auth")
const router =express.Router();

router.route("/register").post(register);
router.route("/login").post(login)
router.route("/me").get(isAuthenticated,loadUser)

module.exports = router;