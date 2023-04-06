import React from 'react'
import '../components/assets/css/customersList.css'
import OrderDataTable from 'react-data-table-component'
import SearchBar from './SearchBar';
import useClipboard from "react-use-clipboard";
import { CSVLink } from "react-csv";

function CustomersListCom() {

    const Data = [
        {
            F_name: "Amy",
            L_name: "Crawley",
            Email: "amywsa927@hotmail.com",
            Phone: "(718) 506-4660",
            Register_Date_time: "2023/5/2,03:08 PM",
        },
        {
            F_name: "Amy",
            L_name: "Crawley",
            Email: "amywsa927@hotmail.com",
            Phone: "(718) 506-4660",
            Register_Date_time: "2023/5/2,03:08 PM",
        },
        {
            F_name: "Amy",
            L_name: "Crawley",
            Email: "amywsa927@hotmail.com",
            Phone: "(718) 506-4660",
            Register_Date_time: "2023/5/2,03:08 PM",
        },
        {
            F_name: "Amy",
            L_name: "Crawley",
            Email: "amywsa927@hotmail.com",
            Phone: "(718) 506-4660",
            Register_Date_time: "2023/5/2,03:08 PM",
        },
        {
            F_name: "Amy",
            L_name: "Crawley",
            Email: "amywsa927@hotmail.com",
            Phone: "(718) 506-4660",
            Register_Date_time: "2023/5/2,03:08 PM",
        },
        {
            F_name: "Amy",
            L_name: "Crawley",
            Email: "amywsa927@hotmail.com",
            Phone: "(718) 506-4660",
            Register_Date_time: "2023/5/2,03:08 PM",
        }, {
            F_name: "Amy",
            L_name: "Crawley",
            Email: "amywsa927@hotmail.com",
            Phone: "(718) 506-4660",
            Register_Date_time: "2023/5/2,03:08 PM",
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
            name: "First Name",
            selector: (row) => <span>{row.F_name}</span>

        },
        {
            name: "Last Name",
            selector: (row) => <span>{row.L_name}</span>
        },
        {
            name: "Email",
            selector: (row) => <span>{row.Email}</span>
        },
        {
            name: "Phone",
            selector: (row) => <div>{row.Phone}</div>
        },
        {
            name: "Register Date/Time",
            selector: (row) => <div>{row.Register_Date_time}</div>
        }
    ]
    return (
        <>
            <div className="customersList mt-5">
                <div className="innerCusListBox">
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

export default CustomersListCom