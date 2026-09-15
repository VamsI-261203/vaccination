import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1 className="mb-4">
          Welcome to Vaccination Management System
        </h1>

        <div className="d-flex justify-content-center gap-3">

          <Link
            to="/admin-login"
            className="btn btn-primary"
          >
            Admin Login
          </Link>

          <Link
            to="/user-registration"
            className="btn btn-success"
          >
            User Registration
          </Link>

          <Link
            to="/user-login"
            className="btn btn-warning"
          >
            User Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;