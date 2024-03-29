import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const TransactionHistory = () => {
  const [Data, setData] = useState([]);

  // const fetchUrl = "http://localhost:4000/getTransactions"
  const fetchUrl = "https://bank-app-3n1n.onrender.com/getTransactions"

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        // console.log(res.data.transactionlist);
        setData(res.data.transactionlist);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(Data);

  return (
    <Fragment>
      {/* header */}
      <Navbar />

      <div className="container">
        <h1 className="text-center" style={{ marginTop: "1rem" }}>
          Transaction History
        </h1>

        <br />
        <div className="table-responsive-sm">
          <table className="table table-hover table-striped table-condensed table-bordered">
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th className="text-center">S.No.</th>
                <th className="text-center">Sender</th>
                <th className="text-center">Receiver</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Date & Time</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {Data.map((transac, i) => (
                <tr key={i}>
                  <td className="py-2">{i + 1}</td>
                  <td className="py-2">{transac.sender}</td>
                  <td className="py-2">{transac.receiver}</td>
                  <td className="py-2">{transac.amount} </td>
                  <td className="py-2">
                    {new Date(transac.date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default TransactionHistory;
