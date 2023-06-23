const express = require('express');
const { getAllUsers, updateUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get("/get", getAllUsers) 
userRouter.patch("/update/:id", updateUser) 

module.exports = userRouter;