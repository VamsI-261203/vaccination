import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {

  const [centers, setCenters] = useState([]);

  const navigate = useNavigate();

  // GET all vaccination centres
  const fetchCenters = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/admin/centers"
      );

      console.log(response.data);

      if (response.data.success === true) {
        setCenters(response.data.data);
      }

    } catch (error) {

      console.error("Error fetching centres:", error);

      alert("Failed to fetch vaccination centres");

    }
  };

  // Call API when dashboard loads
  useEffect(() => {

    fetchCenters();

  }, []);

  // DELETE vaccination centre
  const handleDelete = async (centerId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vaccination centre?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      const response = await axios.delete(
        `http://localhost:5000/api/admin/centers/${centerId}`
      );

      console.log("Delete response:", response.data);

      if (response.data.success === true) {

        alert(
          response.data.message ||
          "Vaccination centre deleted successfully"
        );

        fetchCenters();

      } else {

        alert(
          response.data.message ||
          "Failed to delete vaccination centre"
        );

      }

    } catch (error) {

      console.error("Delete error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to delete vaccination centre"
      );

    }
  };

  // LOGOUT
  const handleLogout = () => {

    // Redirect admin to Home page
    navigate("/");

  };

  return (
    <div>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px"
        }}
      >

        <h1>ADMIN DASHBOARD</h1>

        {/* Logout - Top Right */}
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>

      </div>

      <hr />

      {/* Create Vaccination Centre */}
      <Link to="/create-center">
        Create Vaccination Centre
      </Link>

      <br />
      <br />

      {/* Show All Users */}
      <Link to="/admin/users">
        Show All Users
      </Link>

      <br />
      <br />

      <h2>Vaccination Centres</h2>

      {centers.length === 0 ? (

        <p>No vaccination centres found.</p>

      ) : (

        <table border="1" cellPadding="10">

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pin Code</th>
              <th>Contact Number</th>
              <th>Vaccine</th>
              <th>Available Slots</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {centers.map((center) => (

              <tr key={center.id}>

                <td>{center.id}</td>
                <td>{center.name}</td>
                <td>{center.address}</td>
                <td>{center.city}</td>
                <td>{center.state}</td>
                <td>{center.pin_code}</td>
                <td>{center.contact_number}</td>
                <td>{center.vaccine_name}</td>
                <td>{center.available_slots}</td>
                <td>{center.status}</td>

                <td>

                  {/* Edit */}
                  <Link to={`/edit-center/${center.id}`}>
                    Edit
                  </Link>

                  {" | "}

                  {/* Delete */}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(center.id);
                    }}
                  >
                    Delete
                  </a>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default AdminDashboard;

