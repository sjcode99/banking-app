import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import ListCustomer from "./components/ListCustomer";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage/>} />
        <Route path="/customers" element={<ListCustomer />} />
        <Route path="/transactions" element={<TransactionHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
