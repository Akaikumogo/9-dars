import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="list">
          <ul className="nav-list">
            <Link to="/sign-up">
              <button className="btn">SignUp</button>
            </Link>
          </ul>
        </div>
      </div>
      <div className="Home_page">
        <h1>Ilovadan foydalanish uchun ro'yxatdan o'ting</h1>
      </div>
    </>
  );
}
