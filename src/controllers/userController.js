import bcrypt from "bcrypt"
import User from "../models/userModel"

export const index = (req, res) => {
  User.find({},(err, user) => {
    res.status(200).json(user)
  })
}

export const newItem = (req, res) => {
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

export const view = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) res.send(err)
    res.json({
      data: user
    })
  })
}

export const update = (req, res) => {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err)

    user.name = req.body.name
    user.email = req.body.email

    user.save(function(err) {
      if (err) res.json(err)
      res.json({
        data: user
      })
    })
  })
}

export const deleteItem = (req, res) => {
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
