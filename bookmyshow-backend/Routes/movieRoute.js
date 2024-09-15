//created the express and router & controller--------->
const express = require('express')
const router = express.Router()
const controller = require("../Controller/movieController")

//post and get booking are storeBooking and GetBooking 
router.post("/booking", controller.storeBooking)
router.get("/booking", controller.getBooking)

module.exports = router
