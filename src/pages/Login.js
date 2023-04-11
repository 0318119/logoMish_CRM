import React from "react";
import formImg from "../assets/images/login.svg";
import "../components/assets/css/login.css";

function Login() {
  return (
    <>
      <section className="loginFormSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 p-5">
              <div className="loginFormBox">
                <form action="">
                  <div className="formtxtBox">
                    <h4>We Are Logo Mish</h4>
                    <span>Welcome back, please login to your account.</span>
                  </div>
                  <div class="form-group mt-5">
                    <label>User Name*</label>
                    <input type="text" class="form-control mt-2" placeholder="Enter User Name" />
                  </div>
                  <div class="form-group mt-3">
                    <label>Password*</label>
                    <input type="password" class="form-control mt-2" placeholder="Enter User password" />
                  </div>
                  <div className="formRememberBox mt-4">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="Remember" />
                      <label class="form-check-label" htmlFor="Remember">Remember Me</label>
                    </div>
                    <a href="">Forgot Password?</a>
                  </div>

                  <div className="signInBtnBox mt-5">
                    <button type="submit">sign in</button><br />
                    <span>Don't have an account?<a href="">Sign up</a></span>
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
    </>
  );
}

export default Login;
