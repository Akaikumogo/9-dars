import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    addUsers();
  };

  const addUsers = () => {
    const newUser = { userName, password };
    const oldUsers = JSON.parse(localStorage.getItem("users"));
    if (!oldUsers) {
      localStorage.setItem("users", JSON.stringify([newUser]));
    } else {
      localStorage.setItem("users", JSON.stringify([...oldUsers, newUser]));
    }
  };

  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">Let's Sign-Up</h1>
      </div>
      <div className="Home_page">
        <div>
          <form onSubmit={handleSignUp}>
            <input
              className="input"
              placeholder="Username"
              type="text"
              minLength={3}
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              minLength={6}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/login">
              <button onClick={addUsers} className="btn" type="submit">
                Sign-Up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn">Sign-In</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
