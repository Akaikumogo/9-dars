import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Account from "./components/Account";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
