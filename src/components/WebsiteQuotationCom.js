import React from 'react'
import '../components/assets/css/websiteQuotations.css'
import OrderDataTable from 'react-data-table-component'
import SearchBar from './SearchBar';
import useClipboard from "react-use-clipboard";
import { CSVLink } from "react-csv";


function WebsiteQuotationCom() {

    const Data = [
        {
            customer_name: "Emma David",
            email: "michaeljordan3322@gmail.com",
            phone: "6193630101",
            package_details: "Corporate Branding 0",
            Register_Date_time: "16-Aug-22, 01:56 PM",
        },
        {
            customer_name: "Emma David",
            email: "michaeljordan3322@gmail.com",
            phone: "6193630101",
            package_details: "Corporate Branding 0",
            Register_Date_time: "16-Aug-22, 01:56 PM",
        },
        {
            customer_name: "Emma David",
            email: "michaeljordan3322@gmail.com",
            phone: "6193630101",
            package_details: "Corporate Branding 0",
            Register_Date_time: "16-Aug-22, 01:56 PM",
        },
        {
            customer_name: "Emma David",
            email: "michaeljordan3322@gmail.com",
            phone: "6193630101",
            package_details: "Corporate Branding 0",
            Register_Date_time: "16-Aug-22, 01:56 PM",
        },
        {
            customer_name: "Emma David",
            email: "michaeljordan3322@gmail.com",
            phone: "6193630101",
            package_details: "Corporate Branding 0",
            Register_Date_time: "16-Aug-22, 01:56 PM",
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
            name: "Email",
            selector: (row) => <span>{row.email}</span>
        },
        {
            name: "Phone",
            selector: (row) => <span>{row.phone}</span>
        },
        {
            name: "Package Details",
            selector: (row) => <span>{row.package_details}</span>
        },
        {
            name: "Register Date/Time",
            selector: (row) => <span>{row.Register_Date_time}</span>
        },
        {
            name: "Actions",
            cell: (row) => <div className='actionsBtns'>
                <button className='deleteBtn'>Delete</button>
            </div>
        }
    ]

    return (
        <>
            <div className="webQuotBox">
                <div className="innerWebQuotBox">
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
        </>
    )
}

export default WebsiteQuotationCom