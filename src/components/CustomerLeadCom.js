import React, { useState } from 'react'
import '../components/assets/css/CustomersLeads.css'
import OrderDataTable from 'react-data-table-component'
import SearchBar from './SearchBar';
import useClipboard from "react-use-clipboard";
import { CSVLink } from "react-csv";
import AddLeadsModal from './modals/AddLeadsModal';
import  secureLocalStorage  from  "react-secure-storage";
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// ================================================
const config = require('../components/config.json')
// =================================================




function CustomerLeadCom() {
    const [modalShown, toggleModal] = useState(false);
    const [copyUserData, setCopyUserData] = useState([])
    const [isMakeFile, setMakeFile] = useState([])
     // =========================
     var get_refresh_token = secureLocalStorage.getItem("refresh");
     var get_access_token = secureLocalStorage.getItem("access_token");
     // ===============================
     const [isGetAllSubPakages,setGetAllSubPakages] = useState([]);
     const [isGetPackages,setGetPackages] = useState([]);
    //  ===============================================
    const navigate = useNavigate()


    const Data = [
        {
            customer_name: "Emma David",
            package_name: "SEO+SMM+Youtube marketing for six months Partial payment",
            price: "3500",
            payment_method: "stripe",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            agent_name: "Tyler Scott",
        },
        {
            customer_name: "Emma David",
            package_name: "SEO+SMM+Youtube marketing for six months Partial payment",
            price: "3500",
            payment_method: "stripe",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            agent_name: "Tyler Scott",
        },
        {
            customer_name: "Emma David",
            package_name: "SEO+SMM+Youtube marketing for six months Partial payment",
            price: "3500",
            payment_method: "stripe",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            agent_name: "Tyler Scott",
        },
        {
            customer_name: "Emma David",
            package_name: "SEO+SMM+Youtube marketing for six months Partial payment",
            price: "3500",
            payment_method: "stripe",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            agent_name: "Tyler Scott",
        },
        {
            customer_name: "Emma David",
            package_name: "SEO+SMM+Youtube marketing for six months Partial payment",
            price: "3500",
            payment_method: "stripe",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            agent_name: "Tyler Scott",
        },
    ];

    const [isCopied, setCopied] = useClipboard(JSON.stringify(copyUserData));
    const countPerPage = 5;

    const columns = [
        {
            name: "R.No",
            cell: (row, index) => index + 1
        },
        {
            name: "Customer Name",
            selector: (row) => <span>{row.customer_name}</span>

        },
        {
            name: "Package Name",
            selector: (row) => <span>{row.package_name}</span>
        },
        {
            name: "Price",
            selector: (row) => <span>{row.price}</span>
        },
        {
            name: "Payment Method",
            selector: (row) => <span>{row.payment_method}</span>
        },
        {
            name: "Register Date/Time",
            selector: (row) => <span>{row.Register_Date_time}</span>
        },
        {
            name: "Agent Name",
            selector: (row) => <span>{row.agent_name}</span>
        },
        {
            name: "Actions",
            cell: (row) => <div className='actionsBtns'>
                <button className='upadteBtn'>Update</button>
                <button className='deleteBtn'>Delete</button>
                <button className='deleteBtn'>Mailer!</button>
                <button className='updatePwdBtn'>View Comments!</button>
                <button className='updatePwdBtn'>Add Comments!</button>
            </div>
        }
    ]

    const addNewLead = () => {
        toggleModal(!modalShown);
    }

    async function getAllSubPakages(){
        fetch(`${config['baseUrl']}/packages/getAllSubPakages`, {
            method: "GET",
            headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.messsage == "unauthorized") {
                fetch(`${config['baseUrl']}/packages/getAllSubPakages`, {
                    method: "GET",
                    headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` }
                }).then(response => {
                    return response.json()
                }).then(response => {
                    if (response.messsage == "timeout error") {navigate('/')}
                    else {
                        secureLocalStorage.setItem("refresh", response.referesh_token);
                        secureLocalStorage.setItem("access_token", response.access_token);
                        setGetAllSubPakages(response.data)
                    }
                }).catch((errs) => {
                    console.log("errors", errs)
                })
            }
            else {
                // console.log("getAllSubPakages",response.data)
                setGetAllSubPakages(response.data)
            }
        }).catch((errs) => {
            console.log(errs)
        })
    }

    async function getPackages(){
        fetch(`${config['baseUrl']}/packages/getPackages`, {
            method: "GET",
            headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.messsage == "unauthorized") {
                fetch(`${config['baseUrl']}/packages/getPackages`, {
                    method: "GET",
                    headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` }
                }).then(response => {
                    return response.json()
                }).then(response => {
                    if (response.messsage == "timeout error") {navigate('/')}
                    else {
                        secureLocalStorage.setItem("refresh", response.referesh_token);
                        secureLocalStorage.setItem("access_token", response.access_token);
                        setGetPackages(response.data)
                    }
                }).catch((errs) => {
                    console.log("errors", errs)
                })
            }
            else {
                // console.log("getPackages",response.data)
                setGetPackages(response.data)
            }
        }).catch((errs) => {
            console.log(errs)
        })
    }

    useEffect(() => {
        getAllSubPakages()
        getPackages()
    }, [])
    
    return (
        <>
            <div className="CusLeadsBox">
                <button className="addLeadsBtn" onClick={addNewLead}>Add New Lead</button>
                <div className="innerCusLeadsBox">
                    <div className="btnBox">
                        <button onClick={setCopied}> Copy</button>
                        <CSVLink data={isMakeFile} filename={"LeadFile.csv"}>CSV</CSVLink>
                        <button>Excel</button>
                        <button>PDF</button>
                        <button>Print</button>
                    </div>
                    <SearchBar />
                </div>
                <OrderDataTable
                    columns={columns}
                    data={Data}
                    highlightOnHover
                    pagination
                    paginationServer
                    paginationPerPage={countPerPage}
                    paginationRowsPerPageOptions={[5, 10, 20, 50, 100]}
                />
            </div>
            <AddLeadsModal close={() => { toggleModal(false) }} 
                {...{modalShown,isGetPackages,setGetPackages,isGetAllSubPakages,setGetAllSubPakages}}
            />
        </>
    )
}

export default CustomerLeadCom