const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log("server running on port 3001")
})

app.get("/", (req, res) => {
  res.send("Hello World1")
})
