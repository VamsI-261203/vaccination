import { useNavigate } from "react-router-dom";

function UserLoginFailure() {

  const navigate = useNavigate();

  return (
    <div>

      <h1>User Login Failed</h1>

      <p>
        Invalid email or password.
      </p>

      <button onClick={() => navigate("/user-login")}>
        Try Again
      </button>

      <br />
      <br />

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>

    </div>
  );
}

export default UserLoginFailure;
