import React from 'react'
import MainLayout from '../../../components/MainLayout/MainLayout'
import cardusagevector1 from '../../../img/cardusagevector1.png';
import cardusagevector2 from '../../../img/cardusagevector2.png';
import unchecked from '../../../img/unchecked.png';
import calender from '../../../img/calender.PNG';
import calender2 from '../../../img/calender2.PNG';
import './card_usage2.scss'





function card_usage2() {
    return (
        <MainLayout>
            <h4 className="sam_cardusageh4-1">Card Usage</h4>
            <h4 className="sam_cardusageh4-2">Home / Settings / Card Usage</h4>
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

                <div class="card sam_cardusage2_container">
                    <div class="card-body">

                    </div>
                </div>

                <div class="card sam_cardusage2_container2">
                    <div class="card-body">

                    </div>
                </div>
                <div class="card sam_cardusage2_container3">
                    <div class="card-body">

                    </div>
                </div>
                <div class="card sam_cardusage2_container4">
                    <div class="card-body">

                    </div>
                </div>

                <div class="card sam_cardusage2_container5">
                    <div class="card-body">

                    </div>
                </div>





            </div>
        </MainLayout>
    )
}

export default card_usage2
