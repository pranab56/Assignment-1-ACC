const express = require('express');
const { randomUser, allUser,postUser } = require('../controller/getUser');
const router=express.Router();

router.get("/random",randomUser)
router.get("/all",allUser)
router.post("/save",postUser)

module.exports=router;