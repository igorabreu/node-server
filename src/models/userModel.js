var mongoose = require("mongoose")

// Setup schema
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

// Export Contact model
var User = (module.exports = mongoose.model("user", userSchema))

module.exports.get = (callback, limit) => {
  User.find(callback).limit(limit)
}
