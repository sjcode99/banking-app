const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routess = require("./routes/routingmethods.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyparser.json({ type: "application/json" }));
app.use(bodyparser.urlencoded({ extended: true }));
let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
};
app.use(cors());

app.use(allowCrossDomain);
app.use("/", routess);

//Database connectivity
const Atlas_URL = process.env.DB_URL;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(Atlas_URL, {
    useNewUrlParser: true,
    dbName: "banking-system",
    useUnifiedTopology: true,
  })
  // .then(() =>
  //   app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  // )
  .then(console.log("DB got connected SUCCESSFULLY"))
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
