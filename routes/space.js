const express = require('express');

const router = express.Router();

const spaceController = require('../controllers/spaceController');

router.get('/',spaceController.getAPIDetails);

router.get('/search',spaceController.getAPIDetailsBySearch);

module.exports = router;