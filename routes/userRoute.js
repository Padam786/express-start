const express = require('express');
const getUser = require('../controller/userController/index.controller');
const createUser = require('../controller/userController/userCreate.controller');
const login = require('../controller/userController/login.controller');
const authCheck = require('../middleware/authCheck');
const router = express.Router();

router.get('/',  getUser);
router.post('/register', createUser);
router.post('/login', login )



module.exports =router
