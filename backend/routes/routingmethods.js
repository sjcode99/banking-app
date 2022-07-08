const express = require("express");
const router = express.Router();

const {
  getHomepage,
  getCustomers,
  getTransactions,
  updateDatabase,
} = require("../controllers/Database_queries");

router.get("/", getHomepage);
router.get("/getCustomers", getCustomers);
router.get("/getTransactions", getTransactions);
router.post("/customers/:accountNo", updateDatabase);

module.exports = router;
