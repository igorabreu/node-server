var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var app = express()
var apiRoutes = require("./routes/api-routes")
require("dotenv").config()
var port = process.env.PORT

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

mongoose.connection.on("connected", res => {
  console.log("Database is connected")
})

app.get("/", (req, res) => {
  res.send("Working")
})

app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log("Running API on port " + port)
})
