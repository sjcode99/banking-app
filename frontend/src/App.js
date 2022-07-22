import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import ListCustomer from "./components/ListCustomer";
import TransactionHistory from "./components/TransactionHistory";
// import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    // <ToastProvider>
    <Router>
      <Routes>
        <Route path="/"  element={<Homepage/>} />
        <Route path="/customers" element={<ListCustomer />} />
        <Route path="/transactions" element={<TransactionHistory />} />
      </Routes>
    </Router>
    // </ToastProvider>
  );
}

export default App;
