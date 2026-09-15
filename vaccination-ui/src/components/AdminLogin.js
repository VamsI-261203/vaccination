import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username: username,
          password: password
        }
      );

      console.log(response.data);

      if (response.data.success === true) {
        navigate("/admin-dashboard");
      } else {
        navigate("/admin-login-error");
      }

    } catch (error) {

      console.error(error);

      navigate("/admin-login-error");
    }
  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6 col-lg-4">

          <div className="card shadow">

            <div className="card-header bg-primary text-white text-center">

              <h3 className="mb-0">
                Admin Login
              </h3>

            </div>

            <div className="card-body">

              <form onSubmit={handleLogin}>

                {/* Username */}

                <div className="mb-3">

                  <label className="form-label">
                    Username
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    required
                  />

                </div>


                {/* Password */}

                <div className="mb-3">

                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />

                </div>


                {/* Login Button */}

                <div className="d-grid">

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Login
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;