const express = require("express")
const router = express.Router();
const {userRegister} = require( "../controllers/userControllers" )

router.route("/userRegister").post(userRegister)

module.exports = router;