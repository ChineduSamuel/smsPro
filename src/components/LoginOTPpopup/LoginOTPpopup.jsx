import React from 'react'
import arrow from '../../assets/arrow-up.png';
import chris from '../../assets/chris.png';
import closeicon from '../../assets/close-icon.webp';
import key from '../../assets/key.png';
import './LoginOTPpopup.css'

function LoginOTPpopup2() {
    return (
        <div>
            <div className="sam_profile_background-container">
                <div className="sam_profile-container">
                    <div className="sam_profile-content">
                        <img src={arrow} div className="sam_arrow-icon" />
                        <div className="sam_img-container" ><img src={chris} div className="sam_chris-img" />
                            <button className="sam_savechanges2 " type="button">Change Photo</button>
                        </div>
                        <h3 className="sam_h3-23">Profile details</h3>
                        <h3 className="sam_h4-44">Personal Information</h3>
                        <p className="sam_p-44">Change your details and profile picture here</p>
                        <form className='sam_profile-form'>

                            

                            <div className="sam_Popup-container">
                                <img src={closeicon} className="sam_close-icon" />
                                <h3 className="sam_h3-101">Provide your OTP to login</h3>
                                <p className="sam_p-OTP">Protecting your account is our top priority, Please<br /> confirm ypur login by entering the authorization code sent to you.</p>
                                <img src={key} className="sam_key-lock" />
                            </div>
                            <div className="sam_input-container-OTP">
                                <label for="OTP">Enter OTP</label>
                                <input
                                    id="OTP"
                                    name="OTP"
                                    placeholder="X X X X X X"
                                    type="samchi_text"

                                />

                            </div>
                            <p className="sam_p-otp2">It may take up to a minute to get your code. <br />Have you not received it? <a href="#"> Resend a new code. </a> </p>
                            <button className="sam_cancel" type="submit">CANCEL</button>
                            <button className="sam_create" type="submit">CREATE</button>
                            <div className="sam_profile_input-container fname">
                                <label for="fname">First Name:</label>
                                <input id="fname" name="fname" placeholder="Samuel" type="samchi_text"


                                />

                            </div>


                            <div className="sam_profile_input-container lname">
                                <label for="lname">Last Name:</label>
                                <input id="lname" name="lname" placeholder="Franklin" type="samchi_text"

                                />


                            </div>

                            <div className="sam_profile_input-container email">
                                <label for="email">Email:</label>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="samuel@touchcore.com"
                                    type="samchi_email"

                                />


                            </div>
                            <div className="sam_profile_input-container phone">
                                <label for="phone">Phone Number:</label>
                                <input id="phone" name="phone" placeholder="08035398131" type="samchi_text"

                                />


                            </div>
                            <div className="sam_profile_text-container">

                                <div className="sam_profile_input-container-country">
                                    <label for="country">COUNTRY:</label>
                                    <input
                                        id="country"
                                        name="country"
                                        placeholder="Nigeria"
                                        type="samchi_text"

                                    />

                                </div>


                                <div className="sam_profile_input-container-city">
                                    <label for="city">City*</label>
                                    <input
                                        id="city"
                                        name="city"
                                        placeholder="Lekki"
                                        type="samchi_text"

                                    />

                                </div>
                                <div className="sam_profile_input-container address">
                                    <label for="address">Address*</label>
                                    <input
                                        id="address"
                                        name="address"
                                        placeholder="2 rokwe Lekki Pennisula"
                                        type="samchi_text"

                                    />

                                </div>
                                <div className="sam_profile_input-container housemumber">
                                    <label for="address">House Number*</label>
                                    <input
                                        id="house"
                                        name="house"
                                        placeholder="24"
                                        type="samchi_text"

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
                                    type="samchi_text"

                                />

                            </div>

                            <div className="sam_profile_input-container housemumber">
                                <label for="address">House Number*</label>
                                <input
                                    id="house"
                                    name="house"
                                    placeholder="24"
                                    type="samchi_text"

                                />

                            </div>
                            <div className="sam_profile_input-container oldpassword">
                                <label for="oldpassword">Old Password</label>
                                <input
                                    id="oldpassword"
                                    name="oldpassword"
                                    type="samchi_password"

                                />

                            </div>
                            <div className="sam_profile_input-container newpassword">
                                <label for="newpassword">New Password</label>
                                <input
                                    id="newpassword"
                                    name="newpassword"
                                    type="samchi_password"

                                />

                            </div>

                            <div className="input-container confirmpassword">
                                <label for="confirmnewpassword">Confirm New Password</label>
                                <input
                                    id="confirmnewpassword"
                                    name="confirmnewpassword"
                                    type="samchi_password"

                                />

                            </div>
                            <button className="sam_updatechanges" type="button">UPDATE PASSWORD</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginOTPpopup2
