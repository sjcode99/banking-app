import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import Dialogform from "./Dialogform";
import "../App.css"
import Footer from "../footer/Footer";
// import logo from "../assets/logo.jpg";

const ListCustomer = () => {
  const [Data, setData] = useState([]);

  const fetchUrl = "http://localhost:4000/getCustomers";

  useEffect(() => {
    axios(fetchUrl)
      .then((response) => {
        setData(response.data.customerlist);
        // console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      {/* header */}
      <Navbar />
      
      <div className="container">
        <h1 style={{marginTop: '1rem'}}>Transfer Money</h1>
        <br />
        <div className="row">
          <div className="col">
            <div className="table-responsive-sm">
              <form>
                <table className="table table-hover table-sm table-striped table-condensed table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center py-2">
                        Account No.
                      </th>
                      <th scope="col" className="text-center py-2">
                        Name
                      </th>
                      <th scope="col" className="text-center py-2">
                        E-Mail
                      </th>
                      <th scope="col" className="text-center py-2">
                        Balance
                      </th>
                      <th scope="col" className="text-center py-2">
                        Operation
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{textAlign: "center"}}>
                    {Data.map((data) => (
                      <tr key={data._id}>
                        <td className="py-2">{data.accountNo}</td>
                        <td className="py-2">{data.name}</td>
                        <td className="py-2">{data.email}</td>
                        <td className="py-2">{data.balance}</td>
                        {/* <td>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={getTransaction.bind(this,data)}
                          >
                            Transact
                          </button>
                        </td> */}
                        <td>
                          {<Dialogform data={Data} fromCustomer={data}/> }
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ListCustomer;
