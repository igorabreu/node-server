const User = require("../models/userModel")
const bcrypt = require("bcrypt")

exports.index = (req, res) => {
  User.get((err, users) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      })
    }
    res.json({
      status: "success",
      data: users
    })
  })
}

exports.new = (req, res) => {
  var user = new User()
  bcrypt.hash(req.body.password, 5, (err, bcryptedPassword) => {
    user.name = req.body.name
    user.email = req.body.email
    user.password = bcryptedPassword
    user.save(err => {
      res.json({
        user
      })
    })
  })
}

exports.view = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) res.send(err)
    res.json({
      data: user
    })
  })
}

exports.update = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err)

    user.name = req.body.name
    user.gender = req.body.gender
    user.email = req.body.email
    user.phone = req.body.phone

    user.save(function(err) {
      if (err) res.json(err)
      res.json({
        data: contact
      })
    })
  })
}

exports.delete = function(req, res) {
  User.remove(
    {
      _id: req.params.user_id
    },
    function(err, user) {
      if (err) res.send(err)

      res.json({
        status: "success"
      })
    }
  )
}
