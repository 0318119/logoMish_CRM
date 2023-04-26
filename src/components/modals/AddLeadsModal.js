import React from 'react'
import './assets/css/addLeadsModal.css'
import  secureLocalStorage  from  "react-secure-storage";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// ================================================
const config = require('../../components/config.json')
// =================================================


function AddLeadsModal(props) {
    const [isCustomerName, setCustomerName] = useState();
    const [isEmailAddress, setEmailAddress] = useState();
    const [isPhoneNumber, setPhoneNumber] = useState();
    const [isPackageId,setPackageId] = useState();
    const [isCustomPackageName, setCustomPackageName] = useState();
    const [isPrice, setPrice] = useState();
    const [isAgentName, setAgentName] = useState();
    const [isPaymentMethod, setPaymentMethod] = useState();
    // =========================
    var get_refresh_token = secureLocalStorage.getItem("refresh");
    var get_access_token = secureLocalStorage.getItem("access_token");
    var get_user_id = secureLocalStorage.getItem("user_id");
    // ===============================
    const navigate = useNavigate()


    const createLeadHandler = async (e) =>{
        e.preventDefault();
        await fetch(`${config['baseUrl']}/lead/CreateCustomerLeads`, {
            method: "POST",
            headers: { "content-type": "application/json", "access_token": `Bareer ${get_access_token}` },
            body: JSON.stringify({
                "cutomer_name": isCustomerName,
                "email": isEmailAddress,
                "number": isPhoneNumber,
                "package_id": isPackageId,
                "custom_package": isCustomPackageName,
                "price": isPrice,
                "user_id": get_user_id,
                "agent_name": isAgentName,
                "payment_method": isPaymentMethod
            })
        }).then((response) => {
            return response.json()
        }).then( async (response) => {
            if (response.messsage == "unauthorized") {
                await fetch(`${config['baseUrl']}/lead/CreateCustomerLeads`, {
                    method: "POST",
                    headers: { "content-type": "application/json", "referesh_token": `Bareer ${get_refresh_token}` },
                    body: JSON.stringify({
                        "cutomer_name": isCustomerName,
                        "email": isEmailAddress,
                        "number": isPhoneNumber,
                        "package_id": isPackageId,
                        "custom_package": isCustomPackageName,
                        "price": isPrice,
                        "user_id": get_user_id,
                        "agent_name": isAgentName,
                        "payment_method": isPaymentMethod
                    })
                }).then(response => {
                    return response.json()
                }).then(response => {
                    if (response.messsage == "timeout error") {navigate('/')}
                    else {
                        secureLocalStorage.setItem("refresh", response.referesh_token);
                        secureLocalStorage.setItem("access_token", response.access_token);
                    }
                }).catch((errs) => {
                    console.log("errors", errs)
                })
            }
            else {
                console.log("Check Lead", response)
            }
        }).catch((errs) => {
            console.log(errs)
        })
    }



    return props.modalShown ? (
        <>
            <div className="addLeadsModalBox" >
                <div className="addLeadsBox">
                    <h4>Add New Custom Lead!</h4>
                    <form onSubmit={createLeadHandler}>
                        <div className="leadsScrollBox">
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Customer Name</label>
                                    <input type="text" class="form-control" placeholder="Customer Name here!" required 
                                    onChange={(e) => {setCustomerName(e.target.value)}}
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input type="email" class="form-control" placeholder="Email Address here!" required 
                                    onChange={(e) => {setEmailAddress(e.target.value)}}
                                    />
                                </div>
                            </div>
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="number" class="form-control" placeholder="Phone Number here!" required 
                                     onChange={(e) => {setPhoneNumber(e.target.value)}}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Package</label>
                                    <select className="form-select" onChange={(e)=>setPackageId(e.target.value) } required>
                                        <option selected disabled>Select a Package</option>

                                        {props.isGetPackages?.map((items) => {
                                            // {console.log(props.isGetPackages)}
                                            return (
                                                <>
                                                    <option className="valueOptionTag" disabled value="Logo_Packages">{items.name} Packages</option>
                                                    {
                                                        props.isGetAllSubPakages.filter(data=>data.package_id==items.id).map(ii=>(
                                                            <option value={ii.id}>{ii.name}</option>
                                                        ))
                                                    }
                                                </>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Custom Package Name</label>
                                    <input type="text" class="form-control" placeholder="Custom Package Name!" required 
                                    onChange={(e)=>setCustomPackageName(e.target.value) }
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="number" class="form-control" placeholder="Price here!" required 
                                    onChange={(e)=>setPrice(e.target.value) }
                                    />
                                </div>
                            </div>
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Agent Name</label>
                                    <input type="text" class="form-control" placeholder="Agent Name!" required
                                    onChange={(e)=>setAgentName(e.target.value) }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Payment Method</label>
                                    <select class="form-select" onChange={(e)=>setPaymentMethod(e.target.value) }>
                                        <option selected>Select a Payment Method</option>
                                        <option value="Paypal">Paypal</option>
                                        <option value="Stripe">Stripe</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="addLeadsBtnBox">
                            <button>Submit</button>
                            <button onClick={() => { props.close() }}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ) : null
}



export default AddLeadsModal