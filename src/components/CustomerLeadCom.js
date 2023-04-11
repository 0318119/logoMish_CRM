import React, { useState } from 'react'
import '../components/assets/css/CustomersLeads.css'
import OrderDataTable from 'react-data-table-component'
import SearchBar from './SearchBar';
import useClipboard from "react-use-clipboard";
import { CSVLink } from "react-csv";
import AddLeadsModal from './modals/AddLeadsModal';


function CustomerLeadCom() {
    const [modalShown, toggleModal] = useState(false);

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

    const [isCopied, setCopied] = useClipboard(JSON.stringify(Data));
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

    return (
        <>
            <div className="CusLeadsBox">
                <button className="addLeadsBtn" onClick={addNewLead}>Add New Lead</button>
                <div className="innerCusLeadsBox">
                    <div className="btnBox">
                        <button onClick={setCopied}> Copy</button>
                        <CSVLink data={Data} filename={"LeadFile.csv"}>CSV</CSVLink>
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
                {...{modalShown}}
            />
        </>
    )
}

export default CustomerLeadCom