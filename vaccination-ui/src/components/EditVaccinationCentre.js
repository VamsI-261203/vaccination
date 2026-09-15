import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditVaccinationCentre() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [center, setCenter] = useState(null);

  const [availableSlots, setAvailableSlots] = useState("");

  const [status, setStatus] = useState("ACTIVE");

  // Get centre by ID
  useEffect(() => {

    const fetchCenter = async () => {

      try {

        const response = await axios.get(
          `http://localhost:5000/api/admin/centers/${id}`
        );

        console.log(response.data);

        if (response.data.success === true) {

          const data = response.data.data;

          setCenter(data);

          setAvailableSlots(data.available_slots);

          setStatus(data.status);

        }

      } catch (error) {

        console.error("Fetch centre error:", error);

      }

    };

    fetchCenter();

  }, [id]);

  // Update centre
  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.put(
        `http://localhost:5000/api/admin/centers/${id}`,
        {
          availableSlots: Number(availableSlots),
          status: status
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log(response.data);

      alert("Vaccination centre updated successfully");

      navigate("/admin-dashboard");

    } catch (error) {

      console.error("Update error:", error);

      alert("Failed to update vaccination centre");

    }
  };

  // Loading
  if (!center) {

    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  }

  return (
    <div>

      <h1>Edit Vaccination Centre</h1>

      <hr />

      <h2>Centre Information</h2>

      <p>
        <strong>ID:</strong> {center.id}
      </p>

      <p>
        <strong>Name:</strong> {center.name}
      </p>

      <p>
        <strong>Address:</strong> {center.address}
      </p>

      <p>
        <strong>City:</strong> {center.city}
      </p>

      <p>
        <strong>State:</strong> {center.state}
      </p>

      <p>
        <strong>Pin Code:</strong> {center.pin_code}
      </p>

      <p>
        <strong>Contact Number:</strong> {center.contact_number}
      </p>

      <p>
        <strong>Vaccine:</strong> {center.vaccine_name}
      </p>

      <hr />

      <h2>Update Information</h2>

      <form onSubmit={handleUpdate}>

        <div>

          <label>Available Slots: </label>

          <input
            type="number"
            value={availableSlots}
            onChange={(e) =>
              setAvailableSlots(e.target.value)
            }
          />

        </div>

        <br />

        <div>

          <label>Status: </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <option value="ACTIVE">
              ACTIVE
            </option>

            <option value="INACTIVE">
              INACTIVE
            </option>

          </select>

        </div>

        <br />

        <button type="submit">
          Update Centre
        </button>

      </form>

      <br />

      <button onClick={() => navigate("/admin-dashboard")}>
        Cancel
      </button>

    </div>
  );
}

export default EditVaccinationCentre;