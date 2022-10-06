const mongoose = require('mongoose')
var User = mongoose.model('User')
exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .trim()
    .match(/^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,12}(\.[a-z]{2,12})?$/)
}
exports.validateLength = (str, min, max) => {
  return String(str).length >= min && String(str).length <= max
}
exports.validateUsername = async (username) => {
  let a = false
  do {
    let check = await User.findOne({ username })
    if (check) {
      username =
        username + (new Date() * Math.random()).toString().substring(0, 1)
      a = true
    } else {
      a = false
    }
  } while (a)
  return username
}
