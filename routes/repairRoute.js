
const express = require('express');
const { repairCreate } = require('../controller/repairController/repair.controller');
const authCheck = require('../middleware/authCheck');
const router = express.Router();

router.post('/', authCheck,  repairCreate )


module.exports = router;