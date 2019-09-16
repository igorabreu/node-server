const router = require("express").Router()
import { index, newItem, view, update, deleteItem } from "../controllers/userController"
import { auth } from "../controllers/authenticationController"

//root
router.get("/", (req, res) => {
  res.json({
    message: "working"
  })
})

//Users
router
  .route("/users")
  .get(index)
  .post(newItem)

router
  .route("/users/:user_id")
  .get(view)
  .patch(update)
  .put(update)
  .delete(deleteItem)

//Authentication
router.route("/login").post(auth)

export default router
