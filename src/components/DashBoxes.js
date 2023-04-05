import React,{useEffect, useState} from 'react'
// ICONS
import { TbBorderSides as Orders_ico } from "react-icons/tb";
import { TbBounceLeft as Bounce_ico } from "react-icons/tb";
import { FiUsers as Visitors_ico} from "react-icons/fi";
import { CgUserList  as UserRegister_ico} from "react-icons/cg";
// CSS
import '../components/assets/css/dashboard.css'

function DashBoxes() {
  return (
    <>
        <section className='DashBoxesSection'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="dashBoxes">
                            <h4>
                                <Orders_ico />
                                <span>New orders</span>
                            </h4>
                            <h5>2555</h5>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="dashBoxes">
                            <h4>
                                <Bounce_ico />
                                <span>Bounce Rate</span>
                            </h4>
                            <h5>2555</h5>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="dashBoxes">
                            <h4>
                                <Visitors_ico />
                                <span>Unique visitors</span>
                            </h4>
                            <h5>2555</h5>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="dashBoxes">
                            <h4>
                                <UserRegister_ico />
                                <span>User Register</span>
                            </h4>
                            <h5>2555</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DashBoxes