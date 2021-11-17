const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const saucesCtrl = require('../controllers/sauces');

router.get('/', auth, saucesCtrl.getAllSauces);

module.exports = router;