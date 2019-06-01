const router = require("express").Router()
const userController = require("../controllers/userController")
const authenticationController = require("../controllers/authenticationController")

//root
router.get("/", (req, res) => {
  res.json({
    message: "working"
  })
})

//Users
router
  .route("/users")
  .get(userController.index)
  .post(userController.new)

router
  .route("/users/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete)

//Authentication
router.route("/login").post(authenticationController.auth)

module.exports = router
