
const express = require("express");

const { registerUser, loginUser, logOut, getUserDetails, updateProfile } = require("../controllers/userControllers");
const { isAuthenticatedUser } = require("../middleware/varified");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logOut);

router.route("/detail" ).get(isAuthenticatedUser , getUserDetails);

router.route("/update").put(isAuthenticatedUser ,updateProfile);


module.exports = router