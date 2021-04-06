import React from "react";
import contact1 from "../../img/black-contact.png";
import contacts2 from "../../img/black-contacts.png";
import arrowblack from "../../img/black-arrow.png";
import blue2 from "../../img/blue2.png";
import upload from "../../img/upload.png";
import rightarrow from "../../img/right-arrow.png";
export default function NewCampaign() {
  return (
    <div className="setup-campaign">
      <div className="eclipse">
        <img src={blue2} alt="" />
      </div>
      <div className="text-fore">Add Contacts</div>
      <div className="setup-campaign__parent-box">
        <div className="boxes">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={upload} alt="" />
            </div>
            <div>
              <p className="upload-text">Upload a Contact File</p>
              <p className="sub-text">CSV, VCF...</p>
            </div>
            <div>
              <img src={rightarrow} alt="" />
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={contact1} alt="" />
            </div>
            <div>
              <p className="upload-text">
                Choose contacts <br />
                from your existing category
              </p>
            </div>
            <div>
              <img src={arrowblack} alt="" />
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={contacts2} alt="" />
            </div>
            <div className="upload-text">Register New Contact</div>
            <div>
              <img src={arrowblack} alt="" />
            </div>
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-text">NEXT</button>
        </div>
      </div>
    </div>
  );
}
