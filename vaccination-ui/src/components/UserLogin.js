import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: email,
          password: password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Login response:", response.data);

      // Login successful
      if (response.data.success === true) {

        navigate("/user-dashboard");

      } else {

        // Login failed
        navigate("/user-login-failure");

      }

    } catch (error) {

      console.error("Login error:", error);

      // Wrong credentials / API error
      navigate("/user-login-failure");

    }
  };

  return (
    <div>

      <h1>User Login</h1>

      <hr />

      <form onSubmit={handleLogin}>

        {/* Email */}
        <div>

          <label>Email: </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        </div>

        <br />

        {/* Password */}
        <div>

          <label>Password: </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        </div>

        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>

    </div>
  );
}

export default UserLogin;
