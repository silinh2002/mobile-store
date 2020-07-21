const express = require('express');
const router = express.Router();

var controller = require('../controllers/auth.controller');

router.get('/', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;