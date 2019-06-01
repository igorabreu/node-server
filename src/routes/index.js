const router = require("express").Router()
const userController = require("../controllers/userController")

router.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!"
  })
})

router.route("/users").post(userController.new)

module.exports = router
