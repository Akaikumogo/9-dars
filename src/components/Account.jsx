export default function Account() {
  const username = localStorage.getItem("username");

  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">{username}</h1>
      </div>
      <div className="Home_page"></div>
    </div>
  );
}
