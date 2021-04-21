import React from 'react';
import './Signupsuccessfully.css';
import logobox1 from '../../assets/Slice 1.png'


function FormSuccess() {
    return (
        <div>
            <div className="sam_wrapper-container">
                <div className="sam_shortmenu">

                    <div className="sam_logobox">
                        <h2 className="sam_h2logobox">SMS Project</h2>
                        <p className="sam_p-12logobox">Already have an account?</p>

                        <img src={logobox1} className="sam_logobox1" alt="logobox1" />

                        <div className="sam_loginbox" >
                            <a href="#">LOG IN</a>
                        </div>
                    </div>
                </div>
                <div className="sam_sideattractions-container">
                    <h2 className="sam_h-2side">Start communicating with<br /> your wide range of <br />customers now</h2>
                    <p className="sam_p-5side">With our amazing <a className="a-21" href="#">pricing</a> <br />offers, you have:</p>

                    <div className="sam_good-ticker">
                        <p className="sam_p-2side">Easy access to contact customers at will</p>
                    </div>
                    <div className="sam_good-ticker1">
                        <p className="sam_p-22side">Lesser charges on your bulk messages</p>
                    </div>
                    <div className="sam_good-ticker2">
                        <p className="sam_p-23side">Amazing automated birthday messages to customers</p>
                    </div>
                    <div className="sam_good-ticker3">
                        <p className="sam_p-24side">Allocation of SMS credit levels to different <br />department in your organization</p>
                    </div>
                    <div className="sam_signupsucces-box">
                        <h5 className="sam_h5success">Sign up Successfull!</h5>
                        <p className="sam_p-7side">Check in your inbox for a confirmation email</p>
                    </div>
                </div>
                <p className="sam_p-13side">To find out more information,  take a dive into an exclusive of Project SMS</p>

            </div>



        </div >
    );
};

export default FormSuccess

