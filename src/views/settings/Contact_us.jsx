import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import arrowup from '../../img/arrow-up.png';
import './Contact_us.scss';



function Contact_us() {
    return (
        <MainLayout>

            <h4 className="sam_contact_ustitleh4">Contact Us</h4>
            <h4 className="sam_contact_ustitleh4-1">Home / Overview</h4>
            <p className="sam_contact_ustitlep1">Do kindly fill in your details in the form</p>
            <div class="card settings2_container1">
                <img src={arrowup} className="sam_contactus_arrowup" />
                <div class="card-body">

                    <form>
                        <div class="form-group sam_settings-subjectcont">
                            <label for="exampleFormControlInput1">Subject</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type subject matter" />
                        </div>
                        <div class="form-group sam_settings-emailcont">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" />
                        </div>

                        <div class="form-group sam_settings-messagecont">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="sam_settings-messageconttext" rows="3"></textarea>
                        </div>
                        <button type="button" class=" samcontact_usbtn"><h4 className="sam_contact_usbtntext">Send</h4></button>
                    </form>



                </div>
            </div>




        </MainLayout>
    )
}

export default Contact_us
