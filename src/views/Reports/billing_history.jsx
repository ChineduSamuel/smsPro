import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import arrow from '../../img/arrow-up.png'
import banklogo from '../../img/transfer.png';
import paypal from '../../img/paypal_logo.PNG';
import mastercard from '../../img/master.png';
import arrowdown from '../../img/arrow-up1.png'
import './billing_history.scss';

function billing_history() {
    return (
        <MainLayout>
            <h4 className="sam_bill-h41">Billing History</h4>
            <h4 className="sam_bill-h42">Home / Overview</h4>
            <h4 className="sam_bill-h43">28 November 2020</h4>
            <h4 className="sam_bill-h44-time"> 02:40 PM</h4>


            <div className="card mb-3">
                <img src={arrow} div className="sam_arrow-icon-bill" />
                <h4 className="sam_top-h3-1">Top up Summary</h4>
                <h5 className='sam_current_billh5'>Current Balance from: N50.00</h5>
                <h5 className="sam_amounttoph5-1">Amount Topped Up</h5>
                <h5 className="sam_amounttoph5-2">N1,000</h5>
                <div className="sam_bill_col-md-6 pb-4" />


                <h4 className="sam_selectpayh4-2">Selected Payment Option</h4>
                <div class="sam_payment_card-body">
                    <img src={banklogo} className="sam_bank_logo" />


                </div>
                <div class="sam_payment_card-body1">
                    <img src={paypal} className="sam_paypal_logo" />


                </div>
                <div class="sam_payment_card-body2">
                    <img src={mastercard} className="sam_mastercard_logo" />


                </div>


                <div class="sam_form-check">
                    <input
                        class="sam_form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">

                    </label>
                </div>


                <div class="sam_form-check1">
                    <input
                        class="sam_form-check-input1"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">

                    </label>
                </div>


                <div class="sam_form-check2">
                    <input
                        class="sam_form-check-input2"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">

                    </label>
                </div>

            </div>
            <h4 className="sam_paymethod-4">Payment method</h4>
            <h4 className="sam_paymentnamesh-4">Abdulalim Adedeji</h4>
            <h4 className="sam_paymentaddressh-4"> Iju 14 Lagos, Nigeria, 10001</h4>
            <h4 className="sam_paymetphoneh-4">+2348161289000</h4>

            <h4 className="sam_amountcreditedh-4">Amount Credited</h4>
            <h4 className="sam_amounth-41">#1,000</h4>
            <h4 className="sam_vat-h-4">VAT</h4>
            <h4 className="sam_amountbalanceh-4">#0.00</h4>
            <h4 className="sam_amountlinespaceh-41">__________________________________________________</h4>
            <h4 className="sam_amountchargedh-4">Total Charged</h4>
            <h4 className="sam_amountremainh-4">#1,000</h4>
            <h4 className="sam_amounlinespaceh-42">__________________________________________________</h4>
            <h4 className="sam_amountprevioush-4">Previous Balance</h4>
            <h4 className="sam_amounth-4-50">#50.00</h4>
            <h4 className="sam_amountnewbalanceh-4-200">New Balance</h4>
            <h4 className="sam_amount1500h-4">#1,500</h4>

            <div class="card_sam1">
                <div class="card-body">
                    <h3 className="sam_toph3-3">Top up Summary</h3>
                    <h4 className="sam_amcreditedh4-4">Amount Credited</h4>
                    <h4 className="sam_1000h4-1" >#1,000</h4>
                    <img src={arrowdown} className="sam_arrowdown" />

                </div>
            
                <h4 className="sam_historydateh4-4">23 November, 2020</h4>
                <h4 className="sam_historytimeh4-2">02:40 PM</h4>
            </div>

            <div class="card_sam2">
                <div class="card-body">
                    <h3 className="sam_toph3-3">Top up Summary</h3>
                    <h4 className="sam_amcreditedh4-4">Amount Credited</h4>
                    <h4 className="sam_1000h4-1" >#1,000</h4>
                    <img src={arrowdown} className="sam_arrowdown" />

                </div>
            </div>

            <div class="card_sam3">
                <div class="card-body">
                    <h3 className="sam_toph3-3">Top up Summary</h3>
                    <h4 className="sam_amcreditedh4-4">Amount Credited</h4>
                    <h4 className="sam_1000h4-1" >#1,000</h4>
                    <img src={arrowdown} className="sam_arrowdown" />

                </div>
            </div>




        </MainLayout>
    )
}

export default billing_history
