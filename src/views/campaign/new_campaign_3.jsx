import React from "react";
import blue2 from "../../img/blue2.png";
import info from "../../img/info.png";
import FormInput from "../../components/Forms/FormInput";
export default function NewCampaign() {
  return (
    <>
      <div className="campaign-estimate">
        <div className="eclipse">
          <img src={blue2} alt="" />
        </div>
        <div className="">
          <div className="text-fore">Campaign Estimate</div>
          <div className="campaign-estimate__estimate">
            <div className="stats">
              <div className="d-flex justify-content-between align-items-center">
                <p>Amount of SMS Units</p>
                <p>332</p>
              </div>
              <br />
              <div className="d-flex justify-content-between align-items-center">
                <p>SMS Parts</p>
                <p>332</p>
              </div>
              <br />
              <div className="d-flex justify-content-between align-items-center bal">
                <p>Balance required for campaign</p>
                <p>N332</p>
              </div>
              <br />
              <div className="d-flex justify-content-between align-items-center">
                <p>Current Balance</p>
                <p>332</p>
              </div>
            </div>
            <div className="campaign-estimate__estimate-box">
              <p className="text-general">
                <img src={info} />
                Insuficient Balance , <span className="lead">Top Up Now! </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule_part">
        <div className="lead">Schedule Delivery</div>
        <div className="schedule_part-box1">
          <div className="d-flex justify-content align-items-top">
            <div className="circle-option pt-3"></div>
            <p className="pl-4 lead">
              Instant Delivery <br />
              <span className="text-general-light pt-2">
                Your message would be sent immediately
              </span>
            </p>
          </div>
        </div>
        <br />
        <div className="schedule_part-box2">
          <div className="d-flex justify-content align-items-center">
            <div className="circle-option"></div>
            <span className="pl-4 pb-4 lead">Schedule</span>
          </div>
          <FormInput
            title="Delivery Date "
            placeholder="Friday, November 27, 2021"
          />
          <FormInput title="Delvery Time " placeholder="8:30 am" />
        </div>
        <br />
        <div className="schedule_part-box3">
          <div className="d-flex justify-content align-items-top">
            <div className="circle-option"></div>
            <div className="pt-1">
              {" "}
              <span className="pl-4 lead">
                Add Contacts for birthday greetings
              </span>
              <br />
              <span className="pl-4 text-light-general">
                Birthday messages would be sent to the contacts anually.
              </span>
              <br />
              <span className="pl-4 text-general-feint">
                You can select or create birthday messages from SMS templates
                for birthdays
              </span>
              <br />
            </div>
          </div>

          <div className="text-right pb-4">
            <div className="schedule_part-select">Select message now</div>
          </div>
        </div>

        <div className="pt-5">
          <div className="info-text">
            <p>
              You do to verify your account to carry out your first campaign,{" "}
              <span className="lead">Verify Account Now</span>
            </p>
            <p>
              You do not have enough balance for this campaign,
              <span className="lead"> Top Up Now </span>
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn-create-template">BACK</button>
            <button className="btn-grey mr-0 ">FINISH</button>
          </div>
        </div>
      </div>
    </>
  );
}
