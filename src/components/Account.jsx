import { Link } from "react-router-dom";

export default function Account() {
  const users = JSON.parse(localStorage.getItem("users"));
  const loginedUser = users.find((item) => {
    return item.status === true;
  });

  const clear = () => {
    users.forEach((item) => {
      item.status = false;
    });
    localStorage.setItem("users", JSON.stringify(users));
  };

  console.log(loginedUser);
  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">{loginedUser.userName}</h1>
      </div>
      <div className="Home_page">
        <h1>{loginedUser.password}</h1>
        <Link to="/">
          <button onClick={clear} className="btn">
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
}
