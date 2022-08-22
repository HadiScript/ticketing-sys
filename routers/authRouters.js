const express = require('express');
const { registerUser, authUser } = require('../controllers/authCntrl');

const router = express.Router();

// register a user 
router.post('/', registerUser)

// auth user and get a token 
// login
router.post('/login', authUser)


module.exports = router