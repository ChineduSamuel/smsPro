import React from 'react'
import './PasswordRecovery.css'
import logo from '../../assets/Slice 1.png';

function PasswordRecovery() {
    return (
        <div>
           
            <img className="samm_logo" src={logo} alt="company's logo" />
            <div className="samm_text-container" >
                <h2 className="sam_h2recovery">PASSWORD RECOVERY</h2>
                <p className="sam-precovery">A password recovery mail has been sent to your email address</p>
            </div>


        </div>
    )
}

export default PasswordRecovery
