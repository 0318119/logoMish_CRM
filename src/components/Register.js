import React from "react";
import LoginImage from "../assets/images/login.svg";
import "../components/assets/css/register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="">
            <h1>We are Logo mish</h1>
            <h6>Welcome! Please create your account </h6>
            <form>
  <div class="row">
    <div class="col">
        <label>First Name*</label>
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
    <label>*Last Name</label>
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
    <div class="form-group mt-4">
                <label>*Email</label>
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder="Email"
                />
              </div>
    <div class="form-group mt-4">
                <label>*User Name</label>
                <input
                  type="email"
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

         <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">I accept terms and policy</label>
</div>  
<button type="submit" className="btn btn-primary signInBtn">
                Sign In
              </button>  
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
};

export default Register;
