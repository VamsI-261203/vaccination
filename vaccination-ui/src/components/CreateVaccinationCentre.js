import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateVaccinationCentre() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    contactNumber: "",
    vaccineName: "",
    availableSlots: "",
    status: "ACTIVE"
  });

  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Submit form
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/admin/centers",
        {
          name: formData.name,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pinCode: formData.pinCode,
          contactNumber: formData.contactNumber,
          vaccineName: formData.vaccineName,
          availableSlots: Number(formData.availableSlots),
          status: formData.status
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log(response.data);

      if (response.data.success === true) {

        alert("Vaccination centre created successfully");

        navigate("/admin-dashboard");

      }

    } catch (error) {

      console.error("Create error:", error);

      alert("Failed to create vaccination centre");

    }
  };

  return (
    <div>

      <h1>Create Vaccination Centre</h1>

      <form onSubmit={handleSubmit}>

        <div>

          <label>Name: </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>Address: </label>

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>City: </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>State: </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>Pin Code: </label>

          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>Contact Number: </label>

          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>Vaccine Name: </label>

          <input
            type="text"
            name="vaccineName"
            value={formData.vaccineName}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>Available Slots: </label>

          <input
            type="number"
            name="availableSlots"
            value={formData.availableSlots}
            onChange={handleChange}
          />

        </div>

        <br />

        <div>

          <label>Status: </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >

            <option value="ACTIVE">ACTIVE</option>

            <option value="INACTIVE">INACTIVE</option>

          </select>

        </div>

        <br />

        <button type="submit">
          Create Centre
        </button>

      </form>

      <br />

      <button onClick={() => navigate("/admin-dashboard")}>
        Back to Dashboard
      </button>

    </div>
  );
}

export default CreateVaccinationCentre;