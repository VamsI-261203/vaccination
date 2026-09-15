import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import CreateVaccinationCentre from "./components/CreateVaccinationCentre";
import EditVaccinationCentre from "./components/EditVaccinationCentre";
import AdminLoginError from "./components/AdminLoginError";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
import ShowAllUsers from "./components/ShowAllUsers";
import UserLoginSuccess from "./components/UserLoginSuccess";
import UserDashboard from "./components/UserDashboard";
import UserLoginFailure from "./components/UserLoginFailure";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= ADMIN ================= */}

        {/* Admin Login */}
        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* Admin Login Error */}
        <Route
          path="/admin-login-error"
          element={<AdminLoginError />}
        />

        {/* Create Vaccination Centre */}
        <Route
          path="/create-center"
          element={<CreateVaccinationCentre />}
        />

        {/* Show All Users */}
        <Route
          path="/admin/users"
          element={<ShowAllUsers />}
        />

        {/* Edit Vaccination Centre */}
        <Route
          path="/edit-center/:id"
          element={<EditVaccinationCentre />}
        />


        {/* ================= USER ================= */}

        {/* User Registration */}
        <Route
          path="/user-registration"
          element={<UserRegistration />}
        />

        {/* User Login */}
        <Route
          path="/user-login"
          element={<UserLogin />}
        />

        {/* User Login Success */}
        <Route
          path="/user-login-success"
          element={<UserLoginSuccess />}
        />

        <Route
        path="/user-dashboard"
         element={<UserDashboard />}
        />

        <Route
         path="/user-login-failure"
        element={<UserLoginFailure />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;