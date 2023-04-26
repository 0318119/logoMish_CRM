import React, { useState } from "react";
import formImg from "../assets/images/login.svg";
import "../components/assets/css/login.css";
import showPwdImg from '../components/assets/images/show.svg';
import hidePwdImg from '../components/assets/images/hide.svg';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage";
// =======================================================================
const config = require('../components/config.json')



function Login() {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginrPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  // ===============================
  const [error, setError,] = useState();
  const [loading, setLoading] = useState(false);
  const [btnEnaledAndDisabled, setBtnEnaledAndDisabled] = useState("")
  // ===================
  const navigate = useNavigate()

  const showAlert = (message, type) => {
    setError({
      message: message,
      type: type,
    })
  }
  const setcookies = () => {
    var u = document.getElementById("emplogemail").value
    var p = document.getElementById("password-field4").value

    document.cookie = "myusername=" + u + ";path=https://hirefrontend.coderouting.comcandidate-login"
    document.cookie = "mypswd=" + p + ";path=https://hirefrontend.coderouting.comcandidate-login"
  }

  const getonloadcookie = () => {
    var user = getcookie("myusername")
    var pass = getcookie("mypswd")
    document.getElementById("emplogemail").value = user
    document.getElementById("password-field4").value = pass
    setloginEmail(user)
    setloginrPassword(pass)
  }
  const getcookie = (cname) => {
    var name = cname + "="
    var decodecookie = decodeURIComponent(document.cookie)
    var ca = decodecookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return "";
  }

  const HandleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBtnEnaledAndDisabled(true);
    try {
      await fetch(`${config['baseUrl']}/users/Login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          "email": loginEmail,
          "password": loginPassword
        })
      }).then((response) => {
          return response.json()
      }).then((response) => {
          setLoading(false);
          setBtnEnaledAndDisabled(false);
          if (response.success) {
            showAlert(response.message, "success")

            secureLocalStorage.setItem("refresh", response.referesh_token);
            var get_referesh_token = secureLocalStorage.getItem("refresh");

            secureLocalStorage.setItem("access_token", response.access_token);
            var get_access_token = secureLocalStorage.getItem("access_token");

            secureLocalStorage.setItem("user_id", response.data[0].id);
            var get_user_id = secureLocalStorage.getItem("user_id");
            navigate('/Dashboard')
          } else {
              showAlert(response.message, "warning")
              setLoading(false);
              setBtnEnaledAndDisabled(false);
          }
      })
    } catch (error) {
        showAlert("Something went wrong.", "warning")
        setLoading(false);
        setBtnEnaledAndDisabled(false);
    }

  }

  return (
    <>
      <section className="loginFormSection" onLoad={() => getonloadcookie()}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 p-5">
              <div className="loginFormBox">

                <form onSubmit={HandleLogin}>
                  <div className="formtxtBox">
                    <h4>We Are Logo Mish</h4>
                    <span>Welcome back, please login to your account.</span>
                    <ul>
                      {error && (
                        <li className={`alert alert-${error.type}` + " " + "mt-4"}>{`${error.message}`}</li>
                      )}
                    </ul>
                  </div>
                  <div class="form-group mt-5">
                    <label>User Name*</label>
                    <input type="email"
                      id="emplogemail"
                      value={loginEmail} name="registerEmail"
                      onChange={e => setloginEmail(e.target.value)}
                      className="form-control" required />
                  </div>
                  <div class="form-group mt-3 pwdBoxOfLogin">
                    <label>Password*</label>
                    <input id="password-field4" value={loginPassword} name="registerPassword"
                      onChange={e => setloginrPassword(e.target.value)}
                      type={isRevealPwd ? "text" : "password"}
                      className="form-control" required />
                    {/* <img
                      title={isRevealPwd ? "Hide password" : "Show password"}
                      src={isRevealPwd ? hidePwdImg : showPwdImg}
                      onClick={() => setIsRevealPwd(prevState => !prevState)}
                    /> */}
                  </div>
                  <div className="formRememberBox mt-4">
                    <div class="form-check">
                      <input onChange={() => setcookies()} type="checkbox" class="form-check-input" id="Remember" />
                      <label className="form-check-label" htmlFor="Remember">Remember Me</label>
                    </div>
                    <Link to="/ForgotPasswordSteps">Forgot Password?</Link>
                  </div>
                  <div className="signInBtnBox mt-5">
                    <button type="submit" disabled={btnEnaledAndDisabled}>  {loading ? "A moment please..." : "Sign in"} </button><br />
                  </div>
                </form>

              </div>
            </div>
            <div className="col-lg-6 p-2">
              <div className="formImgBox">
                <img src={formImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
