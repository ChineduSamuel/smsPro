import React from 'react'
import MainLayout from '../../../components/MainLayout/MainLayout'

import smallsignal1 from '../../../img/smallsignal1.png';
import smallsignal2 from '../../../img/smallsignal2.png';
import smallsignal3 from '../../../img/smallsignal3.png';
import smallsignal4 from '../../../img/smallsignal4.png';
// long graph shapes
import longgraph1 from '../../../img/longgraph1.png';
import longgraph2 from '../../../img/longgraph2.png';
import longgraph3 from '../../../img/longgraph3.png';
import longgraph4 from '../../../img/longgraph4.png';
import longgraph5 from '../../../img/longgraph5.png';
import longgraph6 from '../../../img/longgraph6.png';
import longgraph7 from '../../../img/longgraph7.png';
import longgraph8 from '../../../img/longgraph8.png';
// arrow shapes
import orangearrow from '../../../img/orangearrow.PNG';
import whitearrow from '../../../img/whitearrow.PNG';
import greenarrow from '../../../img/greenarrow.PNG';
import downloadarrow from '../../../img/downloadarrow.PNG';
// calender shapes
import month1 from '../../../img/month1.PNG';
import month2 from '../../../img/month2.PNG';
import sortdown from '../../../img/arrowdown.PNG';
import './campaign_report.scss'

function campaign_report() {
    return (
        <MainLayout>
            <h4 className="sam_campaign_reporth4-1">Campaign Reports</h4>
            <h4 className="sam_campaign_reporth4-2">Home / Overview</h4>
            <div className="card  sam_campaign_card1">
                <h3 className="sam_campaignh3-1"></h3>
                <h3 className="sam_campaignh3-2"></h3>
                <h3 className="sam_campaignh3-3"></h3>
                <h3 className="sam_campaignh3-4"></h3>
                <h3 className="sam_campaignh3-34"></h3>
                <div class="card-body">
                    <h4 className="sam_campaign_reporth4-5">Days</h4>
                    <h4 className="sam_campaign_reporth4-6">No.</h4>
                    <h4 className="sam_campaign_reporth4-7">Customers</h4>
                    <h4 className="sam_campaign_reporth4-8"> Amount</h4>
                    {/* Retangular shapes */}
                    {/* <img src={smallretangle} className="sam_campaign_smallret" /> */}
                    {/* <img src={longretangle1} className="sam_campaign_longret1" /> */}
                    {/* <img src={longretangle2} className="sam_campaign_longret2" /> */}
                    {/*Smallgraph shapes  */}
                    <img src={smallsignal1} className="sam_campaign_smallsignal1" />
                    <img src={smallsignal2} className="sam_campaign_smallsignal2" />
                    <img src={smallsignal3} className="sam_campaign_smallsignal3" />
                    <img src={smallsignal4} className="sam_campaign_smallsignal4" />
                    {/* longgraph shapes */}
                    <img src={longgraph1} className="sam_campaign_longgraph1" />
                    <img src={longgraph2} className="sam_campaign_longgraph2" />
                    <img src={longgraph3} className="sam_campaign_longgraph3" />
                    <img src={longgraph4} className="sam_campaign_longgraph4" />
                    <img src={longgraph5} className="sam_campaign_longgraph5" />
                    <img src={longgraph6} className="sam_campaign_longgraph6" />
                    <img src={longgraph7} className="sam_campaign_longgraph7" />
                    <img src={longgraph8} className="sam_campaign_longgraph8" />

                    {/* Arrow shapes */}

                    {/* Calender shapes */}
                    <img src={month1} className="sam_campaign_month1shape" />
                    <img src={month2} className="sam_campaign_month2shape" />

                </div>
            </div>
            <div className="card  sam_campaign_card2">
                <div class="card-body">

                    <form class="text-secondary">
                        <div class="  sam_campaign_smallret">

                            <input type="text" className="mb-2 bg-secondary" placeholder="1"></input>
                        </div>
                        <div class="  sam_campaign_longret1">

                            <input type="text" className="mb-2 bg-secondary" placeholder="5th / Oct / 2020"></input>
                        </div>
                        <div class="  sam_campaign_longret2">

                            <input type="text" className="mb-2 bg-secondary" placeholder="10th / Oct / 2020"></input>
                        </div>

                    </form>



                    <h4 className="sam_campaign_reporth4-9">Weekly</h4>
                    <img src={sortdown} className="sam_campaign_reportarrowdown" />
                    {/* <h4 className="sam_campaign_reporth4-10">1</h4> */}
                    <h4 className="sam_campaign_reporth4-11">of 25</h4>
                    <h4 className="sam_campaign_reporth4-12"> From:</h4>
                    {/* <h4 className="sam_campaign_reporth4-13"> 5th / Oct / 2020</h4> */}
                    <h4 className="sam_campaign_reporth4-14"> To:</h4>
                    {/* <h4 className="sam_campaign_reporth4-15">10th / Oct / 2020</h4> */}

                </div>
            </div>
            <div className="card sam_campaigncard3">
                <div class="card-body">
                    {/* vertical lines */}
                    <h3 className="sam_campaignh3-5"></h3>
                    <h3 className="sam_campaignh3-6"></h3>
                    <h3 className="sam_campaignh3-7"></h3>
                    <h3 className="sam_campaignh3-8"></h3>

                    {/*Horizontal lines  */}
                    <h3 className="sam_campaignh3-9"></h3>
                    <h3 className="sam_campaignh3-10"></h3>
                    <h3 className="sam_campaignh3-11"></h3>
                    <h3 className="sam_campaignh3-12"></h3>
                    <h3 className="sam_campaignh3-13"></h3>
                    <h3 className="sam_campaignh3-14"></h3>

                </div>
                <h5 className='sam_campaignmonh5'>Monday</h5>
                <h5 className='sam_campaigntuesh5'>Tuesday</h5>
                <h5 className='sam_campaigwedh5'>Wednesday</h5>
                <h5 className='sam_campaignthurh5'>Thursday</h5>
                <h5 className='sam_campaignfrih5'>Friday</h5>
                <h5 className='sam_campaignsath5'>Saturday</h5>
                <h5 className='sam_campaigsunh5'>Sunday</h5>
                <h5 className='sam_campaigntotalh5'>Total</h5>


                {/* Serial Numbers */}
                <h5 className='sam_campaign3-h5'>3</h5>
                <h5 className='sam_campaign4-h5'>5</h5>
                <h5 className='sam_campaign5-h5'>8</h5>
                <h5 className='sam_campaign6-h5'>4</h5>
                <h5 className='sam_campaign7-h5'>5</h5>
                <h5 className='sam_campaign8-h5'>6</h5>
                <h5 className='sam_campaign9-h5'>12</h5>
                <h5 className='sam_campaign10-h5'>456</h5>

                {/* Customers */}
                <h5 className='sam_campaigncust1-h5'>600</h5>
                <h5 className='sam_campaigncust2-h5'>200</h5>
                <h5 className='sam_campaigncust3-h5'>340</h5>
                <h5 className='sam_campaigncust4-h5'>2000</h5>
                <h5 className='sam_campaigncust5-h5'>450</h5>
                <h5 className='sam_campaigncust6-h5'>450</h5>
                <h5 className='sam_campaigncust7-h5'>4500</h5>
                <h5 className='sam_campaigncust8-h5'>6789</h5>

                {/* Amount */}
                <h5 className='sam_campaignamount1-h5'>#680</h5>
                <h5 className='sam_campaignamount2-h5'>#680</h5>
                <h5 className='sam_campaignamount3-h5'>#680</h5>
                <h5 className='sam_campaignamount4-h5'>#680</h5>
                <h5 className='sam_campaignamount5-h5'>#680</h5>
                <h5 className='sam_campaignamount6-h5'>#680</h5>
                <h5 className='sam_campaignamount7-h5'>#680</h5>
                <h5 className='sam_campaignamount8-h5'>#12,000</h5>
            </div>





            <div className="card sam_campaigncard4">
                <div class="card-body">
                    <img src={orangearrow} className="sam_campaign_orangearrow" />
                    <h4 className="sam_campaigntotuph4-1">Top Ups</h4>
                    <h3 className="sam_campaigntotuph4-2">46%</h3>
                </div>
            </div>

            <div className="card sam_campaigncard5">
                <div class="card-body">
                    <img src={whitearrow} className="sam_campaign_whitearrow" />
                    <h5 className="sam_campaigntotuph4-3"> Persoanl Campaigns Expenses</h5>
                    <h3 className="sam_campaigntotuph4-4">11%</h3>
                </div>
            </div>

            <div className="card sam_campaigncard6">
                <div class="card-body">
                    <img src={greenarrow} className="sam_campaign_greenarrow1" />
                    <h5 className="sam_campaigntotuph4-5">Organization Campaigns Expenses</h5>
                    <h3 className="sam_campaigntotuph4-6">56%</h3>
                </div>
            </div>
            <div className="card sam_campaigncard7">
                <div class="card-body">
                    <img src={greenarrow} className="sam_campaign_greenarrow2" />
                    <h5 className="sam_campaigntotuph4-7">Total Campaign Expenses</h5>
                    <h3 className="sam_campaigntotuph4-8">11%</h3>
                </div>
            </div>
            <div className="card  sam_campaign_card8">
                <div class="card-body">
                    <img src={downloadarrow} className="sam_campaign_downloadarrow" />
                </div>
            </div>

            <button type="button" class="sam_campaign_downloadbtn "><h4 className="sam_campaigmbth4">Download as CSV</h4></button>

        </MainLayout>
    )
}

export default campaign_report
