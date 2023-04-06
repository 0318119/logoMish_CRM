import React from "react";
import { Form } from "react-router-dom";
import LoginImage from "../assets/images/login.svg";
import "../components/assets/css/login.css";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="">
            <h1>We are Logo mish</h1>
            <h6>Welcome back, please login to your account</h6>
            <form action="" className="formBox">
              <div class="form-group mt-4">
                <label>*User Name</label>
                <input 
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="Username"
                />
              </div>
              <div class="form-group mt-4">
                <label>*Password</label>
                <input
                  type="password"
                  class="form-control"
                  id=""
                  placeholder="Password"
                />
              </div>
              <div className="pwdBox">
                <div class="form-check">
                    <input
                    type="checkbox"
                    class=""
                    id="pwd"
                    />
                    <label class="form-check-label" htmlFor="pwd">
                    Remember Me
                    </label>
                </div>
                <div className="forget_button">
                <a type="submit" class="btn ">
                    Forgot Password?    
                </a>

                </div>
              </div>
              <button type="submit" className="btn btn-primary signInBtn">
                Sign In
              </button>
              <div className="register">
                <span>
                Don't have an account?
                <a type="submit" class="btn "> Signup</a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="login_image">
            <img src={LoginImage} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
