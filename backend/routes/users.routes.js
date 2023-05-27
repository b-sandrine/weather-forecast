const express = require('express')
const { addUser } = require('../controllers/user.controller')
const router = express.Router();

router.get('/adduser', addUser);

module.exports = router

