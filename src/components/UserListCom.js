import React, { useEffect, useState } from 'react'
import '../components/assets/css/userList.css'
import OrderDataTable from 'react-data-table-component'
import SearchBar from './SearchBar';
import useClipboard from "react-use-clipboard";
import { CSVLink } from "react-csv";
import AddUserModal from './modals/AddUserModal';
import UpdateUser from './modals/UpdateUser';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
// ================================================
const config = require('../components/config.json')



function UserListCom() {
    const [modalShownAddUser, toggleModalAddUser] = useState(false);
    const [modalShownUpdateUser, toggleModalUpdateUser] = useState(false);
    const [error, setError,] = useState();
    const [fetchIdDesignation,setFetchIdDesignation] = useState([]);
    const [UserData, setUserData] = useState([]);
    const [copyUserData, setCopyUserData] = useState([]);
    const [dataLoader, setDataLoader] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isMakeFile, setMakeFile] = useState([])
    const [btnEnaledAndDisabled, setBtnEnaledAndDisabled] = useState("")
    const [getUpdateUser, setUpdateUser] = useState([])
    // =========================
    var get_refresh_token = secureLocalStorage.getItem("refresh");
    var get_access_token = secureLocalStorage.getItem("access_token");
    // ===============================
    const countPerPage = 5;
    const navigate = useNavigate()



    async function getUserData(){
        fetch(`${config['baseUrl']}/users/GetUsers`, {
            method: "GET",
            headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.messsage == "unauthorized") {
                fetch(`${config['baseUrl']}/users/GetUsers`, {
                    method: "GET",
                    headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` }
                }).then(response => {
                    return response.json()
                }).then(response => {
                    if (response.messsage == "timeout error") {navigate('/')}
                    else {
                        secureLocalStorage.setItem("refresh", response.referesh_token);
                        secureLocalStorage.setItem("access_token", response.access_token);
                        setUserData(response.data)
                        setCopyUserData(response.data)
                        setMakeFile(response.data)
                        setDataLoader(true)
                    }
                }).catch((errs) => {
                    console.log("errors", errs)
                }).finally(() => { setLoading(false)})
            }
            else {
                setUserData(response.data)
                setCopyUserData(response.data)
                setMakeFile(response.data)
                setDataLoader(true)
            }
        }).catch((errs) => {
            console.log(errs)
        }).finally(() => { setLoading(false)})
    }

    async function getRoleByid(){
        fetch(`${config['baseUrl']}/role/getRoles`, {
            method: "GET",
            headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.messsage == "unauthorized") {
                fetch(`${config['baseUrl']}/role/getRoles`, {
                    method: "GET",
                    headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` }
                }).then(response => {
                    return response.json()
                }).then(response => {
                    if (response.messsage == "timeout error") {navigate('/')}
                    else {
                        secureLocalStorage.setItem("refresh", response.referesh_token);
                        secureLocalStorage.setItem("access_token", response.access_token);
                        setFetchIdDesignation(response.data)
                    }
                }).catch((errs) => {
                    console.log("errors", errs)
                })
            }
            else {
                setFetchIdDesignation(response.data)
            }
        }).catch((errs) => {
            console.log(errs)
        })
    }


    useEffect(() => {
        getUserData()
        getRoleByid()
    }, [])
    
    const [isCopied, setCopied] = useClipboard(JSON.stringify(copyUserData));

    const showAlert = (message, type) => {
        setError({
          message: message,
          type: type,
        })
      }


    const deleteUser = async (e) => {
        const deleteID = e.currentTarget.getAttribute('data-key');
        console.log(deleteID)
        try {
            await fetch(`${config['baseUrl']}/users/DeleteUser`, {
              method: "POST",
              headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` },
              body: JSON.stringify({
                "id" : deleteID
              })
            }).then((response) => {
                return response.json()
            }).then((response) => {
                if (response.messsage == "unauthorized") {
                    fetch(`${config['baseUrl']}/users/DeleteUser`, {
                        method: "POST",
                        headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` },
                        body: JSON.stringify({
                            "id" : deleteID
                          })
                    }).then(response => {
                        return response.json()
                    }).then(response => {
                        if (response.messsage == "timeout error") {navigate('/')}
                        else {
                            secureLocalStorage.setItem("refresh", response.referesh_token);
                            secureLocalStorage.setItem("access_token", response.access_token);
                            showAlert(response.message, "success")
                            setTimeout(() => {
                                window.location.reload();
                            }, 1000)
                        }
                    }).catch((errs) => {
                        console.log("errors", errs)
                    })
                }
                else {
                    showAlert(response.message, "success")
                    setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                }
            })
        } catch (error) { }
    }

    const columns = [
        {
            name: "R.No",
            cell: (row, index) => index + 1
        },
        {
            name: "Name",
            selector: (row) => <span>{row.name?row.name: "No Name Found"}</span>

        },
        {
            name: "Rights",
            selector: (row) => <div>
                {row.view_permission == 1 ? 
             <><span className='persmissionsTag veiwPer'>View Permission</span><br /></>
             :""   
            }
                {row.edit_permission == 1 ? 
             <><span className='persmissionsTag updatePer'>Edit Permission</span><br /></>
             :""   
            }
                {row.delete_permission == 1 ? 
             <><span className='persmissionsTag deletePer'>Delete Permission</span><br /></>
             :""   
            }
            </div>
        },
        {
            name: "Status",
            selector: (row) => <span className='userStatusTag'>{row.role_id ? fetchIdDesignation&&fetchIdDesignation.length>0?fetchIdDesignation.filter(data=>data.id==row.role_id).length>0?fetchIdDesignation.filter(data=>data.id==row.role_id)[0].role_name:"No Status Found":"No Status Found" : "No Status Found"}</span>
        },
        {
            name: "Register Date/Time",
            selector: (row) => <span className='registerTimeTag'>
                <Moment fromNow ago date={row.created_at} />
            </span>
        },
        {
            name : "Actions",
            cell : (row) => <div className='actionsBtns'>
                <button className='upadteBtn' data-key={row.id} onClick={updateUser}>Update</button>
                <button type="submit" className='deletePer' data-key={row.id} onClick={deleteUser}> Delete </button><br />
            </div>
        }
    ]

    const addUser = () => {
        toggleModalAddUser(!modalShownAddUser);
    }

    const updateUser = async (e) => {
        toggleModalUpdateUser(!modalShownUpdateUser);
        e.preventDefault();
        const UpdateID = e.currentTarget.getAttribute('data-key');
        try {
            await fetch(`${config['baseUrl']}/users/GetUserById/${UpdateID}`, {
              method: "GET",
              headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` },
            }).then((response) => {
                return response.json()
            }).then((response) => {
                if (response.messsage == "unauthorized") {
                    fetch(`${config['baseUrl']}/users/GetUserById/${UpdateID}`, {
                        method: "GET",
                        headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` },
                    }).then(response => {
                        return response.json()
                    }).then(response => {
                        if (response.messsage == "timeout error") {navigate('/')}
                        else {
                            secureLocalStorage.setItem("refresh", response.referesh_token);
                            secureLocalStorage.setItem("access_token", response.access_token);
                            setUpdateUser(response.data)
                            
                        }
                    }).catch((errs) => {
                        console.log("errors", errs)
                    })
                }
                else {
                    setUpdateUser(response.data)
                }
            })
        } catch (error) { }
    }

    return (
        <>
        
            <div className="userListBox">
            <ul>
                {error && (
                    <li className={`alert alert-${error.type}` + " " + "mt-4"}>{`${error.message}`}</li>
                )}
            </ul>
                <button className="addUserBtn" onClick={addUser}>Add User</button>
                <div className="innerUserListBox">
                    <div className="btnBox">
                        <button onClick={setCopied}> Copy</button>
                        <CSVLink data={isMakeFile} filename={"LeadFile.csv"}>CSV</CSVLink>
                        <button>Excel</button>
                        <button>PDF</button>
                        <button>Print</button>
                    </div>
                    <SearchBar />
                </div>

                {loading && (
                    <div className="loaderBox">
                        <div class="loader">
                            <div class="one"></div>
                            <div class="two"></div>
                            <div class="three"></div>
                            <div class="four"></div>
                        </div>
                        {/* <span>Loading...</span> */}
                    </div>
                )}
                {dataLoader && (
                    <>
                        <OrderDataTable
                            columns={columns}
                            data={UserData}
                            highlightOnHover
                            pagination
                            paginationServer
                            paginationPerPage={countPerPage}
                            paginationRowsPerPageOptions={[5, 10, 20, 50, 100]}
                        />
                    </>
                )}
               
            </div>
            <AddUserModal close={() => {toggleModalAddUser(false)}}
            {...{modalShownAddUser,}}/>
             <UpdateUser close={() => {toggleModalUpdateUser(false)}}
            {...{modalShownUpdateUser,getUpdateUser}}/>
        </>
    )
}

export default UserListCom