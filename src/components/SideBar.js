import React from 'react'
import '../components/assets/css/sideBar.css'
import logo from '../assets/images/logoMish.png'
import { RiDashboardLine as Dashboard_ico } from "react-icons/ri";
import { SlBasket as Order_ico } from "react-icons/sl";
import { BsFillChatSquareTextFill as Chat_ico } from "react-icons/bs";
import { FaClipboardList as CustomerList_ico } from "react-icons/fa";
import { RiErrorWarningLine as Warning_ico } from "react-icons/ri";
import { FiUserMinus as UserList_ico } from "react-icons/fi";
import { AiOutlineBuild as Agent_ico } from "react-icons/ai";
import { TbSteam as Customer_leads_ico } from "react-icons/tb";
import { BsBodyText as Customer_quotation_ico } from "react-icons/bs";
import { RiProfileLine as Profile_ico } from "react-icons/ri";
import { CiInboxIn as Inbox_ico } from "react-icons/ci";
import { SiCivicrm as Crm_logs_ico } from "react-icons/si";
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function (props) {
    return (
        <> 
            <div className="scrollBoxSideBar" id={props.isMenuOpen ? "scrollBoxSideBarShow" : "scrollBoxSideBarHide"}>
                <div>
                    <div className='sideBarBox' id={props.isMenuOpen ? "sideBarShow" : "sideBarHide"}>
                        <div className="logoBox">
                            <a href="#">
                                <img src={logo} alt="" id={props.isMenuOpen ? "showLogo" : "hideLogo"}/>
                            </a>
                        </div>
                        <div className="menuBox" id='menuli'>
                            <ul>
                                <li className='mt-3'>
                                    <Dashboard_ico />
                                    <Link to="/Dashboard" id='hideTxt'>Dashboard</Link>
                                </li>
                                <li>
                                    <Order_ico />
                                    <Link to="/AllOrders" id='hideTxt'>Orders</Link>
                                </li>
                                <li>
                                    <CustomerList_ico />
                                    <Link to="/CustomersList" id='hideTxt'>Customer's List</Link>
                                </li>
                                <li>
                                    <Chat_ico />
                                    <Link to="/Chat" id='hideTxt'>Chat</Link>
                                </li>
                                <li>
                                    <Warning_ico />
                                    <Link to="/DisputeOrder" id='hideTxt'>Dispute Order</Link>
                                </li>
                                <li>
                                    <UserList_ico />
                                    <a href="/UsersList" id='hideTxt'>User's List</a>
                                </li>
                                <li>
                                    <Agent_ico />
                                    <Link to="/UserStatistics" id='hideTxt'>Agent's Statistics</Link>
                                </li>
                                <li>
                                    <Customer_leads_ico />
                                    <Link to="/CustomerLeads" id='hideTxt'>Customer's leads</Link>
                                </li>
                                <li>
                                    <Customer_quotation_ico />
                                    <Link to="/WebsiteQuotations" id='hideTxt'>Website Quotations</Link>
                                </li>
                                <li>
                                    <Profile_ico />
                                    <Link to="/Profile" id='hideTxt'>My profile</Link>
                                </li>
                                <li>
                                    <Inbox_ico />
                                    <Link to="" id='hideTxt'>My Inbox</Link>
                                </li>
                                <li>
                                    <Crm_logs_ico />
                                    <Link to="" id='hideTxt'>CRM Logs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
