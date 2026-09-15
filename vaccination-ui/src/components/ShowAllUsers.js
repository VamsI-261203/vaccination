import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowAllUsers() {

  const [users, setUsers] = useState([]);

  // GET all registered users
  const fetchUsers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/admin/users"
      );

      console.log(response.data);

      if (response.data.success === true) {

        setUsers(response.data.data);

      }

    } catch (error) {

      console.error("Error fetching users:", error);

      alert("Failed to fetch users");

    }
  };

  // Call API when page loads
  useEffect(() => {

    fetchUsers();

  }, []);

  return (
    <div>

      <h1>REGISTERED USERS</h1>

      <hr />

      {/* Back to Admin Dashboard */}
      <Link to="/admin-dashboard">
        Back to Admin Dashboard
      </Link>

      <br />
      <br />

      {users.length === 0 ? (

        <p>No registered users found.</p>

      ) : (

        <table border="1" cellPadding="10">

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Pin Code</th>
              <th>Registered Date</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>{user.pin_code}</td>

                <td>{user.created_at}</td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default ShowAllUsers;
