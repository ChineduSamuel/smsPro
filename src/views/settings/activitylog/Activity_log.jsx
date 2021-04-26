import React from 'react'
import MainLayout from '../../../components/MainLayout/MainLayout';
import cardusagevector1 from '../../../img/cardusagevector1.png';
import cardusagevector2 from '../../../img/cardusagevector2.png';
import unchecked from '../../../img/unchecked.png';
import calender from '../../../img/calender.PNG';
import calender2 from '../../../img/calender2.PNG';
import arrowup from '../../../img/arrow-up.png'
import chrisimg from '../../../img/chris.png';
import './Activity_log.scss';


function Activity_log() {
    return (
        <MainLayout>
            <h4 className="sam_cardusageh4-1">Activity Log</h4>
            <h4 className="sam_cardusageh4-2">Home / Overview</h4>
            <div class="row">

                <div class="col-sm-6">
                    <h4 className="sam_cardusageselctperiodh4-3">Select Usage Period</h4>
                    <div className="card sam_card_usage">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
                <form className="sam_card_usage_form1">
                    <div class="form-row">
                        <div className="col sam_cardcol1">
                            <img src={calender} className="sam_cardusage_calender1"></img>
                            <h4 className="sam_cardusageselectdateh4">Select a date</h4>
                            <h4 className="card_usageh4-40">From:</h4>
                            <input type="text" className="form-control " placeholder="28 Nov 2020" />
                        </div>

                        <h4 className="card_usageh4-41">To:</h4>

                        <div className="col sam_cardcol2">

                            <input type="text" className="form-control" placeholder="28 Nov 2020" />

                        </div>
                        <img src={calender2} className="sam_cardusage_calender2"></img>

                    </div>
                    <img src={unchecked} className="sam_cardusage_unchecked"></img>
                    <img src={cardusagevector1} className="sam_cardusage_vector1"></img>
                    <img src={cardusagevector2} className="sam_cardusage_vector2"></img>


                    <h4 className="sam_cardusage_uncheckedh4">All Time</h4>

                    <button type="button" className="btn btn-light sam_cardusage_btn">SEARCH</button>
                </form>



            </div>


            <div class="card activitylog_container2">
                <h4>@8 Nov 2020</h4>
                <img src={arrowup} className="sam_activity_log_arrowup" />
                <div class="card-body">
                    <img src={chrisimg} div className="sam_actlogchris-img" />
                </div>

                <div class="card activitylog_container3">
                    <div class="card-body">
                        <img src={chrisimg} div className="sam_actlogchris-img2" />
                        <img src={chrisimg} div className="sam_actlogchris-img3" />
                    </div>
                </div>

                <div class="card activitylog_container4">

                    <div class="card-body">
                        <img src={chrisimg} div className="sam_actlogchris-img4" />
                        <img src={chrisimg} div className="sam_actlogchris-img5" />

                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default Activity_log
