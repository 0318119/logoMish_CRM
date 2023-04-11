import React from 'react'
import './assets/css/addLeadsModal.css'


function AddLeadsModal(props) {
    return props.modalShown ? (
        <>
            <div className="addLeadsModalBox" >
                <div className="addLeadsBox">
                    <h4>Add New Custom Lead!</h4>
                    <form action="">
                        <div className="leadsScrollBox">
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Customer Name</label>
                                    <input type="text" class="form-control" placeholder="Customer Name here!" required/>
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input type="email" class="form-control" placeholder="Email Address here!" required/>
                                </div>
                            </div>
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="number" class="form-control" placeholder="Phone Number here!" required />
                                </div>
                                <div className="form-group">
                                    <label>Package</label>
                                    <select class="form-select">
                                        <option selected>Select a Package</option>
                                        <option value="Web">Web</option>
                                        <option value="Logo">Logo</option>
                                        <option value="Animated">Animated</option>
                                    </select>
                                </div>
                            </div>
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Custom Package Name</label>
                                    <input type="text" class="form-control" placeholder="Custom Package Name!" required/>
                                </div>
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="number" class="form-control" placeholder="Price here!" required/>
                                </div>
                            </div>
                            <div className="inneraddLeadsBox">
                                <div class="form-group">
                                    <label>Agent Name</label>
                                    <input type="text" class="form-control" placeholder="Agent Name!" required/>
                                </div>
                                <div className="form-group">
                                    <label>Payment Method</label>
                                    <select class="form-select">
                                        <option selected>Select a Payment Method</option>
                                        <option value="Paypal">Paypal</option>
                                        <option value="Stripe">Stripe</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="addLeadsBtnBox">
                            <button>Submit</button>
                            <button onClick={() => {props.close()}}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ) : null
}



export default AddLeadsModal