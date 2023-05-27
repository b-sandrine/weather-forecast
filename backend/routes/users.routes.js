const express = require('express')
const  addUser  = require('../controllers/user.controller')
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Welcome to apis')
})
router.post('/adduser', addUser);

module.exports = router

