let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
let app = express()

let apiRoutes = require("./routes")

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

var port = process.env.PORT || 3000

app.get("/", (req, res) => res.send("Hello World"))

app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log("Running api on port " + port)
})
