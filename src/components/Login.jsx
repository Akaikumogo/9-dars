import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginedUserName, setLoginedUserName] = useState("");
  const [loginedPassword, setLoginedPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    checkUser();
  };

  const checkUser = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    for (const item of users) {
      if (
        item.userName === loginedUserName &&
        item.password === loginedPassword
      ) {
        item.status = true; // Foydalanuvchining statusini true ga o'zgartirish
        localStorage.setItem("users", JSON.stringify(users));
        return;
      }
    }
    console.log("404");
  };

  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">Login</h1>
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
              value={loginedUserName}
              onChange={(e) => setLoginedUserName(e.target.value)}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              minLength={6}
              required
              value={loginedPassword}
              onChange={(e) => setLoginedPassword(e.target.value)}
            />
            <Link to="/account">
              <button onClick={checkUser} className="btn" type="submit">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
