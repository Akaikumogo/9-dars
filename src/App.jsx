import { Routes, Route } from "react-router-dom";
import "./App.css";
import Account from "./components/Account";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
export default function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
