import React from 'react'
import circle1 from '../../img/circle_campaign_1.png'
import circle2 from '../../img/circle_campaign_2.png'
import circle3 from '../../img/circle_campaign_3.png'
import MainLayout from '../../components/MainLayout/MainLayout'
import Step1 from './new_campaign_1'
import Step2 from './new_campaign_2'
import Step3 from './new_campaign_3'
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

      <Step1 />
      <Step2 />
      <br />
      <br />
      <Step3 />
      <div>
        </div>
    </MainLayout>
  )
}
