import React, { Fragment, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useToasts } from "react-toast-notifications";

import image from "../img/pic.png";
import "../App.css";
import axios from "axios";

function Dialogform({ data, fromCustomer }) {
  const { addToast } = useToasts();
  const [showDialog, setshowDialog] = useState(false);
  const [inputData, setinputData] = useState({
    toAccount: "",
    amount: "",
  });
  const openDialog = () => setshowDialog(true);
  const closeDialog = () => setshowDialog(false);

  // const postUrl = "http://localhost:4000/customers/";
  const postUrl = "https://bankapp004.herokuapp.com/customers";

  const handleData = (e) => {
    const value = e.target.value;
    const keyName = e.target.name;
    // console.log(e);
    setinputData({ ...inputData, [keyName]: value });
  };

  // console.log(fromCustomer);
  const updateDatabase = (event, d) => {
    // console.log(d);
    if (parseInt(d.balance) > parseInt(inputData.amount)) {
      // console.log(inputData);
      event.preventDefault();
      axios
        .post(`${postUrl}${fromCustomer.accountNo}`, {
          receiver: inputData.toAccount,
          amount: inputData.amount,
        })
        .then((res) =>
          addToast("Amount transferred successfully!!", {
            appearance: "success",
            autoDismiss: true,
          })
        )
        .catch((err) => console.log(err));
        closeDialog();
      //  window.location = "/customers";
    } else {
      addToast("Please enter correct amount!", {
        appearance: "error",
        autoDismiss: true,
      });
      closeDialog();
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="m"
        data-target="my"
        onClick={() => openDialog()}
      >
        Transfer money
      </button>
      <div className="m" id="my">
        <Dialog open={showDialog} onClose={closeDialog} maxWidth="md">
          <Box className="formBox">
            <img src={image} width="100%" alt="Transfer" />
            <Typography
              style={{ fontWeight: 700, marginTop: 30, fontSize: 35 }}
            >
              Transfer Money
            </Typography>
            <TextField
              variant="filled"
              fullWidth
              margin="dense"
              label="From"
              name="name"
              value={fromCustomer.name}
              readOnly
            ></TextField>

            <TextField
              required={true}
              type="text"
              variant="filled"
              fullWidth
              margin="dense"
              label="amount"
              name="amount"
              autoComplete="off"
              // value=""
              onChange={handleData}
            ></TextField>

            <FormControl variant="filled" fullWidth>
              <InputLabel>Select Bank Account</InputLabel>
              <Select
                label="select account no"
                fullWidth
                onChange={handleData}
                name="toAccount"
                value={inputData.toAccount}
              >
                {data.map((res) => (
                  <MenuItem value={res.accountNo} key={res._id}>
                    {res.name} - {res.accountNo}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={(event) => updateDatabase(event, fromCustomer)}
            >
              Confirm
            </Button>
            <Button onClick={() => closeDialog()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Fragment>
  );
}

export default Dialogform;
