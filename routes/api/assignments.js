const express = require('express');
const router = express.Router();
const assignmentCtrl = require('../../controllers/api/assignments');

router.post('/', assignmentCtrl.create);

router.get('/', assignmentCtrl.index);

router.get('/:id', assignmentCtrl.show);

module.exports = router;