import { Link } from "react-router-dom";

export default function Navbar({ signUp, setSignUp }) {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="list">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <Link to="/sign-up">
            <button onClick={() => setSignUp(true)}></button>
            <li>{signUp ? "form" : "Go sign up"}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
