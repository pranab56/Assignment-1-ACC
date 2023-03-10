const express = require('express');
const { randomUser, allUser,postUser,UpdateUser,deleteUser } = require('../controller/getUser');
const router=express.Router();

router.get("/random",randomUser)
router.get("/all",allUser)
router.post("/save",postUser)
router.patch("/update/:id",UpdateUser)
router.delete("/delete/:id",deleteUser)

module.exports=router;