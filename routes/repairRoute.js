
const express = require('express');
const { repairCreate, repairRead, updateRepair, deleteRepair } = require('../controller/repairController/repair.controller');
const authCheck = require('../middleware/authCheck');
const router = express.Router();

router.post('/', authCheck,  repairCreate )
router.get('/', authCheck, repairRead)
router.put('/:id', authCheck,  updateRepair)
router.delete("/:id", authCheck, deleteRepair )
module.exports = router;