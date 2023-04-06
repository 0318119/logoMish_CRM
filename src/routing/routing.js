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

import Login from '../components/Login';
import Register from '../components/Register';
function routing() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/Register' element={<Register />}/>
            <Route path='/' element={<Login />}/>
            <Route path="Dashboard" element={<Dashboard/>} />
            <Route path="CustomersList" element={<CustomersList />} />
            <Route path="DisputeOrder" element={<DisputeOrder />} />
            <Route path="UsersList" element={<UsersList />} />
            <Route path='AllOrders' element={<AllOrders/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default routing