const Customers = require("../models/Customers.js");
const transaction = require("../models/transaction_history.js");

// get home page
exports.getHomepage = (req, res) => {
  try {
    res.status(200).send("Home");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get customer list
exports.getCustomers = async (req, res) => {
  try {
    const customerlist = await Customers.find({});
    //console.log(customerlist);
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ customerlist });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get transaction history
exports.getTransactions = async (req, res) => {
  try {
    const transactionlist = await transaction.find({});
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // console.log(transactionlist);
    res.status(200).json({ transactionlist });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Updating database
exports.updateDatabase = async (req, res) => {
  try {
    //Deduct amount from the sender
    const sender = await Customers.findOne({
      accountNo: req.params.accountNo,
    });
    // console.log(sender);

    let currBalance = parseInt(sender.balance) - parseInt(req.body.amount);

    const updateSender = await Customers.findOneAndUpdate(
      { accountNo: sender.accountNo },
      {
        $set: { balance: currBalance },
      },
      { new: true }
    );

    // save updated sender
    await sender.save();

    //Adding amount to the receiver
    const receiver = await Customers.findOne({ accountNo: req.body.receiver });
    // console.log(receiver);

    const receiverTotalBalance =
      parseInt(receiver.balance) + parseInt(req.body.amount);

    const updateReceiver = await Customers.findOneAndUpdate(
      { accountNo: receiver.accountNo },
      {
        $set: { balance: receiverTotalBalance },
      },
      { new: true }
    );

    // save updated receiver
    receiver.save({ validateBeforeSave: false });

    //Adding record to transaction_history table
    const transacHistory = new transaction({
      sender: sender.name,
      receiver: receiver.name,
      amount: parseInt(req.body.amount),
      date: Date.now(),
    });

    transacHistory.save({ validateBeforeSave: false });
    res.status(200).json({ transacHistory });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
