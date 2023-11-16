import React from 'react'
import "./signup.css";
const Signup = () => {
  return (
    <div className="signup">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column">
                     <input 
                        className="p-2 my-3" 
                        type="email" 
                        name="email"
                        placeholder="Enter Your Email" />
                        <input 
                        className="p-2 my-3" 
                        type="username" 
                        name="username"
                        placeholder="Enter Your Username" />
                        <input 
                        className="p-2 my-3" 
                        type="password" 
                        name="password"
                        placeholder="Enter Your Password" />
                  </div>
                </div>
                <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
                    <h1 className="text-center sign-up-heading">
                        Sign <br />Up
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;