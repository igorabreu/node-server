const User = require("../models/userModel")
const bcrypt = require("bcrypt")

exports.auth = (req, res) => {
  const { email, password } = req.body
  User.find({ email: email }, (err, user) => {
    if (err) res.send(err)
    bcrypt.compare(password, user[0].password, (err, doesMatch) => {
      res.json({
        auth: doesMatch
      })
    })
  })
}
