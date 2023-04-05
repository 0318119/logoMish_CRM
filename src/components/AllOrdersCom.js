import React, { useState } from 'react'
import OrderDataTable from 'react-data-table-component'
import '../components/assets/css/ordersTable.css'
import SearchBar from './SearchBar';
import useClipboard from "react-use-clipboard";
import { CSVLink } from "react-csv";



function AllOrdersCom() {
    const Data = [
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
        {
            cusName: "John",
            Package: "Web",
            date: "2023/5/2",
            invoice: "LM_1680659150",
            amount: "$85",
            Payment_Method: "stripe"
        },
    ];

    const [isCopied, setCopied] = useClipboard(JSON.stringify(Data));

    const columns = [
        {
            name: "R.No",
            cell: (row, index) => index + 1
        },
        {
            name: "Customer",
            selector: (row) => <div>{row.cusName}</div>

        },
        {
            name: "Package",
            selector: (row) => row.Package
        },
        {
            name: "Date",
            selector: (row) => <div>{row.date}</div>
        },
        {
            name: "Invoice",
            selector: (row) => <div>{row.invoice}</div>
        },
        {
            name: "Amount",
            selector: (row) => <div>{row.amount}</div>
        },
        {
            name: "Payment Method",
            cell: (row) => <div>{row.Payment_Method}</div>
        }
    ]

    return (
        <>
            <div className="orderBox">
                <div className="innerOrderBox">
                    <div className="btnBox">
                        <button onClick={setCopied}> Copy</button>
                        <CSVLink data={Data} filename={"LeadFile.csv"}>CSV</CSVLink>
                        <button>Excel</button>
                        <button>PDF</button>
                         <button>Print</button>
                    </div>
                    <SearchBar/>
                </div>
                <OrderDataTable
                    columns={columns}
                    data={Data}
                    highlightOnHover
                    pagination
                    paginationServer
                />
            </div>
        </>
    )
}

export default AllOrdersCom