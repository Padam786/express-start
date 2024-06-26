const express = require('express');
const getUser = require('../controller/userController/index.controller');
const router = express.Router();

router.get('/', getUser)



module.exports =router
