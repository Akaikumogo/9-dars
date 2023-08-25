import Navbar from "./components/Navbar";
import Name from "./Name.css?inline";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
export default function App() {
  const [signUp, setSignUp] = useState(false);
  return (
    <>
      <Navbar signUp={signUp} setSignUp={setSignUp} />;
      <Router basename="/">
        <Routes>
          <Route
            path="/sign-up"
            element={signUp ? <Registration /> : "GO reg"}
          />
        </Routes>
      </Router>
    </>
  );
}
