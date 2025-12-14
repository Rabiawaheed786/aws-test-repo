const express = require("express")
const {createFunction} = require("../controllers/user.controllers")
//const {createValidationMiddleware} = require("../middlewares/user.middleware")
 
const router = express.Router()

// ------------------- Create User
router.post("/create", createFunction)

module.exports = router