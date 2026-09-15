import { Link, useNavigate } from "react-router-dom";

function UserDashboard() {

  const navigate = useNavigate();

  // Logout
  const handleLogout = () => {

    navigate("/");

  };

  return (
    <div>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <h1>USER DASHBOARD</h1>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

      <hr />

      {/* Profile */}
      <Link to="/user-profile">
        Profile
      </Link>

    </div>
  );
}

export default UserDashboard;

