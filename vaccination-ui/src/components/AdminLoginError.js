function AdminLoginError() {

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="alert alert-danger text-center shadow">

            <h3>
              Admin Login Failed
            </h3>

            <p className="mb-0">
              Invalid username or password.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLoginError;