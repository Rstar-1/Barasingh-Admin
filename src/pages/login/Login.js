import React from 'react'

const Login = () => {
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll flex items-center justify-center p20">
      <div className="d-shadow rounded-10 p30 w-40">
        <h3 className="fsize25 font-600 text-center mtpx1 mbpx1 textprimary">
          Welcome Back
        </h3>
        <p className="fsize14 font-500 textforth text-center mtpx4">
          Don't have ana account <span className="textprimary">Register</span>
        </p>
        <div className="p20">
          <div className="">
            <label className="fsize15 textforth">Email</label>
            <input
              className="w-login mtpx5 h-input fsize12 rounded-5 plpx10 border-ec"
              placeholder="Enter Email"
            />
          </div>
          <div className="mtpx20">
            <label className="fsize15 textforth">Password</label>
            <input
              className="w-login mtpx5 h-input fsize12 rounded-5 plpx10 border-ec"
              placeholder="Enter Password"
            />
          </div>
          <div className="mtpx30 flex justify-center">
            <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 plpx25 prpx25 fsize14 bgprimary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
