export function SignUp() {
  return (
    <div className="w-100 d-flex flex-column bg-light align-items-center py-5">
      <h2 className="my-3 text-info-emphasis fw-bold text-center">
        Start Your Journey With Us..
      </h2>

      <div className="w-90 w-md-50 p-4 border bg-white border-1 rounded-3 shadow mx-auto">
        <h2 className="text-center text-info-emphasis my-3">User Registration</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Enter User Name</label>
            <input type="text" className="form-control" placeholder="Username" />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter User Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Set Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>

          <div className="mb-3 text-end">
            <a href="#">Help!</a>
          </div>

          <button type="submit" className="btn btn-primary w-100 my-3">
            Sign-In
          </button>

          <div className="text-center">
            <a href="#" className="small">Already have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
