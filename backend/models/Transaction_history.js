// Database=> transaction-history table
const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  sender: String,
  receiver: String,
  amount: Number,
  date: Date,
});

module.exports = mongoose.model("Transaction_history", transactionSchema);
