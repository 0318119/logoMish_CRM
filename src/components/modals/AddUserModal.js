import React from 'react'
import './assets/css/addUserModal.css'


function AddUserModal(props) {
    return props.modalShown ? (
        <>
            <div className="addUserModalBox" >
                <div className="addUserBox">
                    <h4>Add New User!</h4>
                    <form action="">
                        <div className="inneraddUserBox">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="Name here!" required/>
                            </div>
                            <div className="form-group">
                                <label>User Type</label>
                                <select class="form-select">
                                    <option selected>Select a user type</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="Closer">Closer</option>
                                    <option value="Project Manager">Project Manager</option>
                                </select>
                            </div>
                        </div>
                        <div className="inneraddUserBox">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="Email here!" required/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password here!" required />
                            </div>
                        </div>
                        <div className="addUserBtnBox">
                            <button>Submit</button>
                            <button onClick={() => {props.close()}}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ) : null
}



export default AddUserModal