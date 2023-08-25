export default function Account() {
  const loginedUser = JSON.parse(localStorage.getItem("users")).find((item) => {
    return item.status === true;
  });

  return (
    <div>
      <div className="navbar">
        <h1 className="User_name">{loginedUser.userName}</h1>
      </div>
      <div className="Home_page"></div>
    </div>
  );
}
