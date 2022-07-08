//Database=> Customer table
const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  name: String,
  email: String,
  balance: String,
  accountNo: String
});

module.exports = mongoose.model("Customers", CustomerSchema);
