const express = require('express');
const { randomUser } = require('../controller/getUser');
const router=express.Router();

router.get("/random",randomUser)

module.exports=router;