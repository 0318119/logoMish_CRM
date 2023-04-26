import React from 'react'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard'
// CSS ==========================
import '../assets/css/main.css'
// BOOTSTRAP ====================
import  '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AllOrders from '../pages/AllOrders';
import CustomersList from '../pages/CustomersList';
import DisputeOrder from '../pages/DisputeOrder';
import UsersList from '../pages/UsersList';
import Login from '../pages/Login';
import Register from '../pages/Register'
import UserStatistics from '../pages/UserStatistics';
import CustomerLeads from '../pages/CustomerLeads';
import WebsiteQuotations from '../pages/WebsiteQuotations';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import ForgotPasswordSteps from '../pages/ForgotPasswordSteps';
function routing() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path="Dashboard" element={<Dashboard/>} />
            <Route path="CustomersList" element={<CustomersList />} />
            <Route path="DisputeOrder" element={<DisputeOrder />} />
            <Route path="UsersList" element={<UsersList />} />
            <Route path='AllOrders' element={<AllOrders/>}/>
            <Route path='UserStatistics' element={<UserStatistics/>}/>
            <Route path='CustomerLeads' element={<CustomerLeads />}/>
            <Route path='WebsiteQuotations' element={<WebsiteQuotations />}/>
            <Route path='Chat' element={<Chat />}/>
            <Route path='Profile' element={<Profile />}/>
            <Route path='ForgotPasswordSteps' element={<ForgotPasswordSteps />}/>
        </Routes>
    </Router>
    </>
  )
}

export default routing