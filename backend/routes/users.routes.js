const express = require('express')
const  { addUser, login,getUsers, updateUser , deleteUser }  = require('../controllers/user.controller')
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Welcome to apis')
})
router.post('/adduser', addUser);

router.post('/login', login);

router.get('/allusers', getUsers);

router.put('/updateuser/:id', updateUser);

router.delete('/deleteuser', deleteUser)

module.exports = router;

