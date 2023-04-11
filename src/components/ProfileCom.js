import React from 'react'
import '../components/assets/css/profile.css'
import user from '../components/assets/images/chat/03.jpg'


function ProfileCom() {
  return (
    <>
      <div className="profileMainBox">

        <div className="profileTopBar">
          <form action="">
            <div className="profileinfoBox">
              <img src={user} alt="" />
              <h4>
                <span>Karla George</span>
                <p>Co-Founder</p>
              </h4>
            </div>
            <div className="avterBtnProfile">
              <button type='submit'>Update photo</button>
              <button type='submit'>Delete</button>
            </div>
          </form>

        </div>
        {/* ================================================== */}
        <div className="container mt-4 border-top">
          <div className="row">
            <div className="col-lg-6 p-4 borderStyled">
              <div className="profileUpdateInfoAll">
                <h4>Edit Your Personal Settings</h4>
                <div className="updateInfoBody">
                  <form action="">
                    <div class="form-group">
                      <label>Full Name</label>
                      <input type="text" class="form-control mt-2" placeholder="Enter full name" value="Karla George"/>
                    </div>
                    <div class="form-group mt-3">
                      <label>Title</label>
                      <input type="text" class="form-control mt-2" placeholder="Enter title" value="Marketing expert"/>
                    </div>
                    <div class="form-group mt-3">
                      <label>Phone Number</label>
                      <input type="number" class="form-control mt-2" placeholder="Enter phone number" value="019756315613"/>
                    </div>
                    <div class="form-group mt-3">
                      <label>Email</label>
                      <input type="email" class="form-control mt-2" placeholder="Enter Email" value="alicewilliams@gmail.com"/>
                    </div>
                    <div class="form-group mt-3">
                      <label>Address</label>
                      <input type="text" class="form-control mt-2" placeholder="Enter Address" value="17504 Carlton Cuevas Rd, Gulfport, MS, 39503"/>
                    </div>
                    <div class="form-group mt-3">
                      <label>Birthday</label>
                      <input type="date" class="form-control mt-2"/>
                    </div>
                    <div class="form-check mt-3">
                      <input type="checkbox" class="form-check-input" id="Remember" />
                      <label class="form-check-label" htmlFor="Remember">I agree to receive email notification.</label>
                    </div>
                    <button>Update Information</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-4">
              <div className="profileLinksBox">
              <h4>Your External Link</h4>
              <div className="profileLinksBody">
                <form action="">
                  <div class="form-group">
                    <label>Facebook URL:</label>
                    <input type="text" class="form-control mt-2" placeholder="Facebook URL" value="https://www.facebook.com/"/>
                  </div>
                  <div class="form-group mt-3">
                    <label>Twitter URL:</label>
                    <input type="text" class="form-control mt-2" placeholder="Twitter URL" value="https://www.Twitter.com/"/>
                  </div>
                  <div class="form-group mt-3">
                    <label>LinkedIn  URL:</label>
                    <input type="text" class="form-control mt-2" placeholder="LinkedIn URL" value="https://www.LinkedIn.com/"/>
                  </div>
                  <div class="form-group mt-3">
                    <label>Website URL:</label>
                    <input type="text" class="form-control mt-2" placeholder="Website URL" value="https://www.Website.com/"/>
                  </div>
                  <button>Save & Update</button>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </>
  )
}

export default ProfileCom