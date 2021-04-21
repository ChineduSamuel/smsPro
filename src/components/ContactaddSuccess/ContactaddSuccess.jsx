import React from 'react';
import goodicon from '../../assets/goodicon.jpg';
import closeicon from '../../assets/close-icon.webp';
import './ContactaddSuccess.css';

function ContactaddSuccess() {
    return (
        <div>
            <div className="contactsuccess-container">
                <img src={goodicon} className="goodicon" />
                <p className="p-success">5 Contacts have been added to your selected category successfullly!</p>
                <img src={closeicon} className="closeicon2" />

            </div>
        </div>
    )
}

export default ContactaddSuccess
