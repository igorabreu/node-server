const router = require("express").Router()
const userController = require("../controllers/userController")

router.get("/", (req, res) => {
  res.json({
    message: "working"
  })
})

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

module.exports = router
