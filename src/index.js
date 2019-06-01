let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
let app = express()
let apiRoutes = require("./routes")
var port = process.env.PORT || 3000

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

mongoose.connect(
  "mongodb+srv://adminUser:Admin971@cluster0-mdbfm.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
)

mongoose.connection.on("connected", res => {
  console.log("Database is connected")
})

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log("Running API on port " + port)
})
