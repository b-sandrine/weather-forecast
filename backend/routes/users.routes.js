const express = require('express')
const  { addUser, getUsers }  = require('../controllers/user.controller')
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Welcome to apis')
})
router.post('/adduser', addUser);

router.get('/allusers', getUsers);

module.exports = router

