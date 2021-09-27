const express = require('express');
const pingController = require('../controllers/pings');
const router = express.Router();

router.get('/ping', pingController.read_pinglist);

module.exports = router;