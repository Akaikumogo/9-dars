import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [userName, setUsername] = useState("");
  const addUser = () => {};
  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">Let's Sign-Up</h1>
      </div>
      <div className="Home_page">
        <div>
          <form>
            <input
              className="input"
              placeholder="User name"
              type="text"
              minLength={"3"}
              required
            />
            <input
              className="input"
              placeholder="password"
              type="password"
              minLength={"6"}
              required
            />
            <Link to="/login">
              <button className="btn" type="submit">
                Sign-Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
