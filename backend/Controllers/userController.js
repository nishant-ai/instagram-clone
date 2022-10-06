const User = require('../models/userModel')
const { generateToken } = require('../Middleware/token')
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require('../Utils/validation')
const { sendVerifyEmail } = require('../Middleware/mailer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.registerUser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      gender,
      bYear,
      bMonth,
      bDay,
      password,
    } = req.body

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid Email Address',
      })
    }
    if (!validateLength(first_name, 3, 20)) {
      return res.status(400).json({
        message: 'First name must be 3-20 characters long',
      })
    }
    if (!validateLength(last_name, 3, 20)) {
      return res.status(400).json({
        message: 'Last name must be 3-20 characters long',
      })
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: 'Password must be 6-40 characters long',
      })
    }
    const check = await User.findOne({ email })
    if (check) {
      return res.status(400).json({
        message: 'Email already exists, Try again with New Email Address',
      })
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    //username generate
    let tempUsername = first_name + last_name
    let newUsername = await validateUsername(tempUsername)
    const user = await new User({
      first_name,
      last_name,
      username: newUsername,
      email,
      gender,
      bYear,
      bMonth,
      bDay,
      password: hash,
    }).save()

    const emailVerificationToken = generateToken({ id: user._id }, '30m')
    const url = `${process.env.BASE_URL}/active/${emailVerificationToken}`
    sendVerifyEmail(user.email, user.first_name, url)
    const token = generateToken({ id: user._id }, '30m')
    res.status(200).json({
      message: 'User Registered Successfully Please Activate Your Account!',
      id: user._id,
      username: user.username,
      email: user.email,
      verified: user.verified,
      first_name: user.first_name,
      last_name: user.last_name,
      profilePicture: user.profilePicture,
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
}
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        message: 'Invalid Email Address ,Email Address Not Found',
      })
    }
    if (!user.verified) {
      return res.status(400).json({
        message: 'Please Verify Your Account',
      })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid Password',
      })
    }
    const token = generateToken({ id: user._id }, '30m')
    res.status(200).json({
      message: 'Login Successfully',
      id: user._id,
      username: user.username,
      email: user.email,
      verified: user.verified,
      first_name: user.first_name,
      last_name: user.last_name,
      profilePicture: user.profilePicture,
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
}
exports.activateAccount = async (req, res) => {
  try {
    const { token } = req.body
    const user = jwt.verify(token, process.env.JWT_SECRET)
    const check = await User.findById(user.id)
    if (!check) {
      return res.status(400).json({
        message: 'Invalid Token',
      })
    }
    if (check.verified) {
      return res.status(400).json({
        message: 'Your Account is Already Verified',
      })
    }
    await User.findByIdAndUpdate(user.id, { verified: true })
    res.status(200).json({
      message: 'Your Account is Verified',
    })
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
}
