import React, { useEffect, useState } from 'react'
import './assets/css/addUserModal.css'
import secureLocalStorage from "react-secure-storage";
import showPwdImg from '../../components/assets/images/show.svg';
import hidePwdImg from '../../components/assets/images/hide.svg';
import { useNavigate } from 'react-router-dom'
// =======================================================================
const config = require('../config.json')


function UpdateUser(props) {
    const [error, setError,] = useState();
    const [loading, setLoading] = useState(false);
    const [btnEnaledAndDisabled, setBtnEnaledAndDisabled] = useState("")
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    // =====================
    const [isUserName, setUserName] = useState();
    const [fetchIdDesignation, setFetchIdDesignation] = useState([]);
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

    async function getByid() {
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
                    if (response.messsage == "timeout error") { navigate('/') }
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


    const showAlert = (message, type) => {
        setError({
          message: message,
          type: type,
        })
      }

    const UpdatingUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        setBtnEnaledAndDisabled(true);
        try {
            await fetch(`${config['baseUrl']}/users/UpdateUser`, {
              method: "POST",
              headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` },
              body: JSON.stringify({
                "name": isUserName   ? isUserName : props.getUpdateUser[0]?.name,
                "email": isUserEmail ? isUserEmail : props.getUpdateUser[0]?.email,
                "id" : props.getUpdateUser[0]?.id,
                "role_id": getorleOfId,
                "view_permission": "",
                "edit_permission": isEditPermission ? isEditPermission : props.getUpdateUser[0]?.edit_permission,
                "delete_permission": isDeletePermission ? isDeletePermission : props.getUpdateUser[0]?.delete_permission,
                "password": isUserPwd,
                "number": ""
              })
            }).then((response) => {
                return response.json()
            }).then((response) => {
                if (response.messsage == "unauthorized") {
                    fetch(`${config['baseUrl']}/users/UpdateUser`, {
                        method: "POST",
                        headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` },
                        body: JSON.stringify({
                            "name": isUserName ? isUserName : props.getUpdateUser[0]?.name,
                            "email": isUserEmail ? isUserEmail : props.getUpdateUser[0]?.email,
                            "role_id": getorleOfId,
                            "view_permission": "",
                            "edit_permission": isEditPermission ? isEditPermission : props.getUpdateUser[0]?.edit_permission,
                            "delete_permission": isDeletePermission ? isDeletePermission : props.getUpdateUser[0]?.delete_permission,
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
                            setLoading(false);
                            setBtnEnaledAndDisabled(false);
                            showAlert(response.message, "success")
                            
                        }
                    }).catch((errs) => {
                        console.log("errors", errs)
                    })
                }
                else {
                    setLoading(false);
                    setBtnEnaledAndDisabled(false);
                    showAlert(response.message, "success")
                }
            })
        } catch (error) { }
    }



    return props.modalShownUpdateUser ? (
        <>
            <div className="addUserModalBox" >

                <div className="addUserBox">
                    <ul>
                        {error && (
                            <li className={`alert alert-${error.type}` + " " + "mt-4"}>{`${error.message}`}</li>
                        )}
                    </ul>
                    <h4>Update User!</h4>
                    <form onSubmit={UpdatingUser}>
                        <div className="inneraddUserBox">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name here!" required
                                    onChange={e => setUserName(e.target.value)} value={isUserName ? isUserName : props.getUpdateUser[0]?.name} />
                            </div>
                            <div className="form-group">
                                <label>User Type</label>
                                <select onChange={(e) => setGetorleOfId(e.target.value)} className="form-select" required="required">
                                    <option defaultValue value="">Select a user type</option>
                                    {fetchIdDesignation?.map((item) => {
                                        return (
                                            item.id == 1 ? "" :
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
                                    onChange={e => setUserEmail(e.target.value)} value={isUserEmail ? isUserEmail : props.getUpdateUser[0]?.email} />
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
                                    onChange={(e) => { setEditPermission(e.target.checked) }}
                                    checked={isEditPermission ? isEditPermission : props.getUpdateUser[0]?.edit_permission == 1 ? true : false} />
                                <label className="form-check-label" htmlFor="edit_permission">Edit permission</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="delete_permission"
                                    onChange={(e) => { setDeletePermission(e.target.checked) }} 
                                    checked={isDeletePermission ? isDeletePermission : props.getUpdateUser[0]?.delete_permission == 1 ? true : false}/>
                                <label className="form-check-label" htmlFor="delete_permission">Delete permission</label>
                            </div>
                        </div>
                        <div className="addUserBtnBox">
                            <button type="submit" disabled={btnEnaledAndDisabled}>  {loading ? "A moment please..." : "Submit"} </button><br />
                            <button onClick={() => { props.close() }}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ) : null
}



export default UpdateUser