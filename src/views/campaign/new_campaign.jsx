import React from 'react'
import circle1 from '../../img/circle_campaign_1.png'
import circle2 from '../../img/circle_campaign_2.png'
import circle3 from '../../img/circle_campaign_3.png'
import contact1 from '../../img/black-contact.png'
import contacts2 from '../../img/black-contacts.png'
import arrowblack from '../../img/black-arrow.png'

import blue from '../../img/blue.png'
import blue2 from '../../img/blue2.png'
import upload from '../../img/upload.png'
import rightarrow from '../../img/right-arrow.png'

import FormInput from '../../components/Forms/FormInput'
import FormText from '../../components/Forms/FormText'
import MainLayout from '../../components/MainLayout/MainLayout'
export default function NewCampaign() {
  return (
    <MainLayout>
      <div className="text-right mb-5">
        <h4>Home / Create New Campaign</h4>
      </div>
      <div className="heading-title py-3">Start a New Campaign</div>

      <div className="campaign-page">
        <div className="campaign-page">
          <div className="campaign-page__top-1">Set Up Campaign</div>
          <div className="campaign-page__top-2">Add Contacts</div>
          <div className="campaign-page__top-3">Review Schedule</div>

          <div className="campaign-page__below-first">
            <img src={circle1} alt="" />
          </div>
          <div className="campaign-page__below-second"></div>
          <div className="campaign-page__below-third">
            <img src={circle2} alt="" />
          </div>
          <div className="campaign-page__below-fourth"></div>
          <div className="campaign-page__below-fifth">
            <img src={circle3} alt="" />
          </div>
        </div>
      </div>

      <div className="setup-campaign">
        <div className="eclipse">
          <img src={blue} alt="" />
        </div>
        <div className="text-fore">Set Up Campaign</div>
        <div className="setup-campaign-form-areas">
          <FormInput
            name=""
            title="Campaign Title"
            placeholder="My Soap Promo"
          />
          <FormInput
            name=""
            title="From"
            placeholder="type in the sender name. E.g: Alpha XYZ stores"
          />
          <FormText name="" title="From" placeholder="Type your message here" />
        </div>
      </div>

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
              <a href="#" className="btn btn-text">NEXT</a>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
