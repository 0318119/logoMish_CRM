import React from "react";
import formImg from "../assets/images/login.svg";
import "../components/assets/css/register.css";

const Register = () => {
  return (
    <section className="loginFormSection">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 p-5">
          <div className="registerFormBox">
            <form action="">
              <div className="formtxtBox">
                <h4>We Are Logo Mish</h4>
                <span>Welcome, Please create your account.</span>
              </div>
              <div className="registerFlexBox mt-3">
                <div class="form-group">
                  <label>First Name*</label>
                  <input type="text" class="form-control mt-2" placeholder="Enter First Name" />
                </div>
                <div class="form-group">
                  <label>Last Name*</label>
                  <input type="text" class="form-control mt-2" placeholder="Enter Last Name" />
                </div>
              </div>
              <div class="form-group mt-3">
                <label>Email*</label>
                <input type="text" class="form-control mt-2" placeholder="Enter Email" />
              </div>
              <div class="form-group mt-3">
                <label>User Name*</label>
                <input type="text" class="form-control mt-2" placeholder="Enter User Name" />
              </div>
              <div class="form-group mt-3">
                <label>Password*</label>
                <input type="password" class="form-control mt-2" placeholder="Enter User password" />
              </div>
              <div className="formRememberBox mt-4">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="accept" />
                  <label class="form-check-label" htmlFor="accept">I accept terms & policy</label>
                </div>
              </div>

              <div className="signInBtnBox mt-5">
                <button type="submit">sign up</button><br />
                <span clas>Already have an account?<a href="">Sign In</a></span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 p-2">
          <div className="formImgBox">
            <img src={formImg} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Register;
