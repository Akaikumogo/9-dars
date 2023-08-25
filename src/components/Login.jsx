import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || []; // Foydalanuvchilar massivini localStorage dan olish
    const user = users.find((user) => user.username === username); // Foydalanuvchi obyektini username asosida izlash

    if (user && user.password === password) {
      // Login muvaffaqiyatli
      setError("");
      localStorage.setItem("loggedInUser", username); // Foydalanuvchi username'ni localStorage ga saqlash
      // Boshqa login bilan bog'lanishlar yoki navigatsiya
    } else {
      // Login xatosi
      setError("Username or password is incorrect.");
    }
  };

  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">Login</h1>
      </div>
      <div className="Home_page">
        <div>
          <form onSubmit={handleLogin}>
            <input
              className="input"
              placeholder="User name"
              type="text"
              minLength={"3"}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input"
              placeholder="password"
              type="password"
              minLength={"6"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/account">
              <button className="btn" type="submit">
                Login
              </button>
            </Link>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}