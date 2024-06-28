const express = require('express');
const getUser = require('../controller/userController/index.controller');
const createUser = require('../controller/userController/userCreate.controller');
const router = express.Router();

router.get('/',  getUser);
router.post('/register', createUser)



module.exports =router
