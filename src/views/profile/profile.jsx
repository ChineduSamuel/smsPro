import React from 'react';
import './profile.css';
import arrow from '../../img/arrow-up.png';
import chris from '../../img/chris.png';
import MainLayout from '../../components/MainLayout/MainLayout';


function Profile() {
    return (
        <MainLayout>
            <h4 className="sam_p-h4">Profile</h4>         <h4 className="sam_p1-h4">Profile / Profile Details</h4>

            <div className="sam_profile-container">
                <img src={arrow} div className="sam_arrow-icon" />
                <img src={chris} div className="sam_chris-img" />
                <button className="sam_savechanges2 " type="button">Change Photo</button>

                <h3 className="sam_h3-23">Profile details</h3>
                <h3 className="sam_h4-44">Personal Information</h3>
                <p className="sam_p-44">Change your details and profile picture here</p>
                <form className='sam_profile-form'>

                    <div className="sam_profile_input-container fname">
                        <label for="fname">First Name:</label>
                        <input id="fname" name="fname" placeholder="Samuel" type="text"


                        />

                    </div>


                    <div className="sam_profile_input-container lname">
                        <label for="lname">Last Name:</label>
                        <input id="lname" name="lname" placeholder="Franklin" type="text"

                        />


                    </div>

                    <div className="sam_profile_input-container email">
                        <label for="email">Email:</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="samuel@touchcore.com"
                            type="email"

                        />


                    </div>
                    <div className="sam_profile_input-container phone">
                        <label for="phone">Phone Number:</label>
                        <input id="phone" name="phone" placeholder="08035398131" type="text"

                        />


                    </div>
                    <div className="sam_profile_text-container">

                        <div className="sam_profile_input-container-country">
                            <label for="country">COUNTRY:</label>
                            <input
                                id="country"
                                name="country"
                                placeholder="Nigeria"
                                type="text"

                            />

                        </div>


                        <div className="sam_profile_input-container-city">
                            <label for="city">City*</label>
                            <input
                                id="city"
                                name="city"
                                placeholder="Lekki"
                                type="text"

                            />

                        </div>
                        <div className="sam_profile_input-container address">
                            <label for="address">Address*</label>
                            <input
                                id="address"
                                name="address"
                                placeholder="2 rokwe Lekki Pennisula"
                                type="text"

                            />

                        </div>
                        <div className="sam_profile_input-container housemumber">
                            <label for="address">House Number*</label>
                            <input
                                id="house"
                                name="house"
                                placeholder="24"
                                type="text"

                            />

                        </div>
                    </div>

                    <button className="sam_savechanges" type="button">SAVE CHANGES</button>


                    <div className="sam_change-login" >
                        <h3 className="sam_h3-10login">Change Login</h3>
                        <p className="sam_p-100login">Password must be at least 8 characters long and must contain numbers, <br /> special characters and one capital letter.</p>

                    </div>
                    <div className="sam_profile_input-container address">
                        <label for="address">Address*</label>
                        <input
                            id="address"
                            name="address"
                            placeholder="2 rokwe Lekki Pennisula"
                            type="text"

                        />

                    </div>

                    <div className="sam_profile_input-container housemumber">
                        <label for="address">House Number*</label>
                        <input
                            id="house"
                            name="house"
                            placeholder="24"
                            type="text"

                        />

                    </div>
                    <div className="sam_profile_input-container oldpassword">
                        <label for="oldpassword">Old Password</label>
                        <input
                            id="oldpassword"
                            name="oldpassword"
                            type="password"

                        />

                    </div>
                    <div className="sam_profile_input-container newpassword">
                        <label for="newpassword">New Password</label>
                        <input
                            id="newpassword"
                            name="newpassword"
                            type="password"

                        />

                    </div>

                    <div className="input-container confirmpassword">
                        <label for="confirmnewpassword">Confirm New Password</label>
                        <input
                            id="confirmnewpassword"
                            name="confirmnewpassword"
                            type="password"

                        />

                    </div>
                    <button className="sam_updatechanges" type="button">UPDATE PASSWORD</button>
                </form>
            </div>


        </MainLayout>
    )
}

export default Profile
