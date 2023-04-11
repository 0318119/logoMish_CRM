import React, { useEffect, useRef, useState } from 'react'
import user_avatar from '../components/assets/images/profile/user_avatar.webp'
import { GoPrimitiveDot as Online_ico } from "react-icons/go";
import { RiLogoutCircleLine as Logout_ico } from "react-icons/ri";
import { FiUser as User_ico } from "react-icons/fi";
import { MdOutlineForwardToInbox as Inbox_ico } from "react-icons/md";
import { FiSettings as UserSettings_ico } from "react-icons/fi";
import { TbHelpHexagon as Help_ico } from "react-icons/tb";

function UserProfile() {
  const [isOpenProfileBox, setOpenProfileBox] = useState(false)
  const refOne = useRef();


  const handleProfileBox = () => {
    setOpenProfileBox(current => !current)
  }



  useEffect(() => {
    const maybeHandler = (e) => {
      if (!refOne.current.contains(e.target)) {
        setOpenProfileBox(false)
      }
    }
    document.addEventListener("mousedown", maybeHandler, true)
    return () => {
      document.removeEventListener("mousedown", maybeHandler, true)
    }
  }, [])

  return (
    <>
      <div className='userProfileBox' ref={refOne}>
        <div className="userInfo" onClick={handleProfileBox}>
          <h5>
            <span className='userName'>Karla George</span>
            <span className='userDesig'>Co-founder</span>
          </h5>
          <div className="userActiveBox">
            <Online_ico />
            <img src={user_avatar} alt="" />
          </div>
        </div>

        {/* ====================================================================== */}
        <div className="userProfileModal" id={isOpenProfileBox ? "showProfile" : "hideProfile"}>
          <div className="profileHeader">
            <h5>
              <span className='userName'>Karla George</span>
              <span className='emailUser'>henry@example.com</span>
            </h5>
            <div className="">
              <Logout_ico />
            </div>
          </div>
          <div className="profileContentBox">
            <div className="innerProfileContentBox">
              <User_ico style={{ color: "#28a745" }} />
              <span>Profile</span>
            </div>
            <div className="innerProfileContentBox" id='profileNotificateBox'>
              <div className="">
                <Inbox_ico style={{ color: "#064CDB" }} />
                <span>Inbox</span>
              </div>
              <div className="">
                <span className='profileNotifyCounter'>5</span>
              </div>
            </div>
            <div className="innerProfileContentBox">
              <UserSettings_ico style={{ color: "#45aaf2" }} />
              <span>Settings</span>
            </div>
            <div className="innerProfileContentBox">
              <Help_ico style={{ color: "#f7b731" }} />
              <span>Need Help?</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile