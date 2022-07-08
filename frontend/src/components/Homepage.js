import React from "react";
import Footer from "../footer/Footer";
import "../img/bank.jpg";
import Navbar from "../navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      {/* header */}
      <Navbar />

      {/* body */}
      <h1>Welcome to Sparks Bank</h1>

      <div className="bg">
        <div className="center">
          <ul>
            <li className="operations">
              <a>
                <button
                  className="btn"
                  id="red"
                  onClick={() => {
                    window.location = "/customers";
                  }}
                >
                  View All Users
                </button>
              </a>
            </li>
            <li className="operations">
              <a>
                <button className="btn" id="blue">
                  Transfer Money
                </button>
              </a>
            </li>
            <li className="operations">
              <a>
                <button
                  className="btn"
                  id="green"
                  onClick={() => {
                    window.location = "/transactions";
                  }}
                >
                  View Transfer History
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
