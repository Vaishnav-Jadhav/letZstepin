

export function SignUp()
{
    return(
        <>
         <div className="w-100 d-flex flex-column bg-light align-items-center"> 
             <h2 className="my-3 text-info-emphasis fw-bold">Start Your Journey With us..</h2>
             <div className="w-25 m-3 p-4 border bg-white border-1 rounded-3 shadow">
              <h2 className="text-center text-info-emphasis my-3">User Registration</h2> 
              <dl>
                <dt className="form-label">Enter User Name</dt>
                <dd><input type="text"  className="form-control"/></dd>
                <dt className="form-label">Enter User Email</dt>
                <dd><input type="email" className="form-control"/></dd>
                <dt className="form-label">Set Password</dt>
                <dd><input type="password"  className="form-control"/></dd>
                <a href="">Help!</a>
                <button className="btn btn-primary w-100 my-3">Sign-In</button>
                <a href="" className="fw-sm">Already have an account</a>
              </dl>
             </div>
         </div>
        </>
    )
}