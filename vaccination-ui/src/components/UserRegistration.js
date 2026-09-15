import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRegistration() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    pinCode: ""
  });

  // Handle input changes
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Handle registration
  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Registration response:", response.data);

      if (response.data.success === true) {

        alert(
          response.data.message ||
          "Registration successful"
        );

        // Redirect to User Login
        navigate("/user-login");

      } else {

        alert(
          response.data.message ||
          "Registration failed"
        );

      }

    } catch (error) {

      console.error("Registration error:", error);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    }
  };

  return (
    <div>

      <h1>User Registration</h1>

      <hr />

      <form onSubmit={handleRegister}>

        {/* Name */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Phone */}
        <div>
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Pin Code */}
        <div>
          <label>Pin Code: </label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          Register
        </button>

      </form>

      <br />

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>

    </div>
  );
}

export default UserRegistration;
