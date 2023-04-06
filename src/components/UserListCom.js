import React, { useState } from 'react'
import '../components/assets/css/userList.css'
import OrderDataTable from 'react-data-table-component'
import SearchBar from './SearchBar';
import useClipboard from "react-use-clipboard";
import { CSVLink } from "react-csv";
import AddUserModal from './modals/AddUserModal';

function UserListCom() {
    const [modalShown, toggleModal] = useState(false);

    const Data = [
        {
            Name: "Emma David",
            Email: "emmadavid@logochemist.com",
            Rights: "Project Manager",
            Status: "Active",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            Last_login: "06-Apr-23, 03:11 AM",
        },
        {
            Name: "Emma David",
            Email: "emmadavid@logochemist.com",
            Rights: "Project Manager",
            Status: "Active",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            Last_login: "06-Apr-23, 03:11 AM",
        },
        {
            Name: "Emma David",
            Email: "emmadavid@logochemist.com",
            Rights: "Project Manager",
            Status: "Active",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            Last_login: "06-Apr-23, 03:11 AM",
        },
        {
            Name: "Emma David",
            Email: "emmadavid@logochemist.com",
            Rights: "Project Manager",
            Status: "Active",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            Last_login: "06-Apr-23, 03:11 AM",
        },
        {
            Name: "Emma David",
            Email: "emmadavid@logochemist.com",
            Rights: "Project Manager",
            Status: "Active",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            Last_login: "06-Apr-23, 03:11 AM",
        },
        {
            Name: "Emma David",
            Email: "emmadavid@logochemist.com",
            Rights: "Project Manager",
            Status: "Active",
            Register_Date_time: "16-Aug-22, 01:56 PM",
            Last_login: "06-Apr-23, 03:11 AM",
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
            name: "Name",
            selector: (row) => <span>{row.Name}</span>

        },
        {
            name: "Rights",
            selector: (row) => <span>{row.Rights}</span>
        },
        {
            name: "Status",
            selector: (row) => <span>{row.Status}</span>
        },
        {
            name: "Register Date/Time",
            selector: (row) => <span>{row.Register_Date_time}</span>
        },
        {
            name: "Last Login",
            selector: (row) => <span>{row.Last_login}</span>
        },
        {
            name : "Actions",
            cell : (row) => <div className='actionsBtns'>
                <button className='upadteBtn'>Update</button>
                <button className='deleteBtn'>Delete</button>
                <button className='updatePwdBtn'>Update Pwd!</button>
            </div>
        }
    ]
    const addUser = () => {
        toggleModal(!modalShown);
    }
    return (
        <>
            <div className="userListBox mt-5">
                <button className="addUserBtn" onClick={addUser}>Add User</button>
                <div className="innerUserListBox">
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
            <AddUserModal close={() => {toggleModal(false)}}
            {...{modalShown,}}/>
        </>
    )
}

export default UserListCom