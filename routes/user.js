const express = require('express');
const { randomUser, allUser } = require('../controller/getUser');
const router=express.Router();

router.get("/random",randomUser)
router.get("/all",allUser)

module.exports=router;