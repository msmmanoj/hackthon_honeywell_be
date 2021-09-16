const express = require('express');

const router = express.Router();

const adminController = require('../controllers/spaceController');

router.get('/',adminController.getAPIDetails);

router.get('/search',adminController.getAPIDetailsBySearch);

module.exports = router;