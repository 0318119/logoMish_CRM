import React, { useEffect, useState } from 'react'
import './assets/css/addUserModal.css'
import  secureLocalStorage  from  "react-secure-storage";
import showPwdImg from '../../components/assets/images/show.svg';
import hidePwdImg from '../../components/assets/images/hide.svg';
import { useNavigate } from 'react-router-dom'
// =======================================================================
const config = require('../config.json')


function AddUserModal(props) {
    const [error, setError,] = useState();
    const [loading, setLoading] = useState(false);
    const [btnEnaledAndDisabled, setBtnEnaledAndDisabled] = useState("")
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    
    // =====================
    const [isUserName, setUserName] = useState();
    const [fetchIdDesignation,setFetchIdDesignation] = useState([]);
    const [isUserEmail, setUserEmail] = useState();
    const [isUserPwd, setUserPwd] = useState();
    const [getorleOfId, setGetorleOfId] = useState()
    const [isEditPermission, setEditPermission] = useState();
    const [isDeletePermission, setDeletePermission] = useState()
    // =========================
    var get_refresh_token = secureLocalStorage.getItem("refresh");
    var get_access_token = secureLocalStorage.getItem("access_token");
    // ===============================
    const navigate = useNavigate()

    const showAlert = (message, type) => {
        setError({
          message: message,
          type: type,
        })
      }

    const CreateUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        setBtnEnaledAndDisabled(true);
        try {
            await fetch(`${config['baseUrl']}/users/CreateUser`, {
              method: "POST",
              headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` },
              body: JSON.stringify({
                "name": isUserName,
                "email": isUserEmail,
                "role_id":getorleOfId,
                "view_permission": "",
                "edit_permission": isEditPermission?1:0,
                "delete_permission": isDeletePermission?1:0,
                "password": isUserPwd,
                "number": ""
              })
            }).then((response) => {
                return response.json()
            }).then((response) => {
                if (response.messsage == "unauthorized") {
                    fetch(`${config['baseUrl']}/users/CreateUser`, {
                        method: "POST",
                        headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` },
                        body: JSON.stringify({
                            "name": isUserName,
                            "email": isUserEmail,
                            "role_id":getorleOfId,
                            "view_permission": "",
                            "edit_permission": isEditPermission?1:0,
                            "delete_permission": isDeletePermission?1:0,
                            "password": isUserPwd,
                            "number": ""
                          })
                    }).then(response => {
                        return response.json()
                    }).then(response => {
                        if (response.messsage == "timeout error") {navigate('/')}
                        else {
                            secureLocalStorage.setItem("refresh", response.referesh_token);
                            secureLocalStorage.setItem("access_token", response.access_token);
                            showAlert(response.message, "success")
                            setLoading(false);
                            setBtnEnaledAndDisabled(false);
                            setUserName("")
                            setUserEmail("")
                            setUserPwd("")
                            setFetchIdDesignation([])
                            setEditPermission(null)
                            setDeletePermission(null)
                            
                        }
                    }).catch((errs) => {
                        console.log("errors", errs)
                    })
                }
                else {
                    showAlert(response.message, "success")
                    setLoading(false);
                    setBtnEnaledAndDisabled(false);
                    setUserName("")
                    setUserEmail("")
                    setUserPwd("")
                    setFetchIdDesignation([])
                    setEditPermission(null)
                    setDeletePermission(null)
                }
            })
        } catch (error) {
            showAlert("Something went wrong.", "warning")
            setLoading(false);
            setBtnEnaledAndDisabled(false);
        }
    }

    async function getByid(){
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
        getByid()
    }, [])

    return props.modalShownAddUser ? (
        <>
            <div className="addUserModalBox" >
                
                <div className="addUserBox">
                    <ul>
                        {error && (
                            <li className={`alert alert-${error.type}` + " " + "mt-4"}>{`${error.message}`}</li>
                        )}
                    </ul>
                    <h4>Add New User!</h4>
                    <form onSubmit={CreateUser}>
                        <div className="inneraddUserBox">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name here!"required
                                 onChange={e => setUserName(e.target.value)} value={isUserName}/>
                            </div>
                            <div className="form-group">
                                <label>User Type</label>
                                <select onChange={(e)=>setGetorleOfId(e.target.value) } className="form-select">
                                    <option defaultValue value="">Select a user type</option>
                                        {fetchIdDesignation?.map((item)=>{
                                            return(
                                                item.id==1?"":
                                                <option key={item.id} value={item.id}>{item.role_name}</option>
                                            )
                                        })}
                                </select>
                            </div>
                        </div>
                        <div className="inneraddUserBox">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Email here!" required
                                 onChange={e => setUserEmail(e.target.value)} value={isUserEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" placeholder="Password here!" required
                                 onChange={e => setUserPwd(e.target.value)} value={isUserPwd}
                                 type={isRevealPwd ? "text" : "password"} />
                                 <img
                                    title={isRevealPwd ? "Hide password" : "Show password"}
                                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                                />
                            </div>
                        </div>
                       <div className="permissionCheckBoxes mt-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="edit_permission" 
                                 onChange={(e) => {setEditPermission(e.target.checked)}} />
                                <label className="form-check-label" htmlFor="edit_permission">Edit permission</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="delete_permission" 
                                 onChange={(e) => {setDeletePermission(e.target.checked)}}/>
                                <label className="form-check-label" htmlFor="delete_permission">Delete permission</label>
                            </div>
                       </div>
                        <div className="addUserBtnBox">
                            <button type="submit" disabled={btnEnaledAndDisabled}>  {loading ? "A moment please..." : "Submit"} </button><br />
                            <button onClick={() => {props.close()}}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ) : null
}



export default AddUserModal