const express = require('express')
const {
  registerUser,
  loginUser,
  activateAccount,
} = require('../Controllers/userController')
const router = express.Router()

router.post('/register', registerUser)
router.post('/active', activateAccount)
router.post('/login', loginUser)

module.exports = router
