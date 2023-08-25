import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    const user = { username, password }; // Yangi foydalanuvchi obyekti
    const users = JSON.parse(localStorage.getItem("users")) || []; // Foydalanuvchilar massivini localStorage dan olish
    users.push(user); // Yangi foydalanuvchini massivga qo'shish
    localStorage.setItem("users", JSON.stringify(users)); // Foydalanuvchilar massivini localStorage ga saqlash
  };

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
            <Link to="/login">
              <button className="btn" type="submit" onClick={addUser}>
                Sign-Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
