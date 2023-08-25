import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">Login</h1>
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
            <Link to="/account">
              <button className="btn" type="submit">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
