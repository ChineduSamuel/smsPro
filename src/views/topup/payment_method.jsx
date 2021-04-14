import React from 'react';
import FormInput from '../../components/Forms/FormInput';
import FormSelect from '../../components/Forms/FormSelect';
import MainLayout from '../../components/MainLayout/MainLayout';
import Table from '../../components/Table/TableBordered';
import checked from '../../img/checked.png';
import unchecked from '../../img/unchecked.png';
import transfer from '../../img/transfer.png';
import master from '../../img/master.png';
import paypal from '../../img/paypal.png';

export default function TopUpIndex () {
  return (
    <MainLayout>
      <div className="organization">
        <div className="text-right mb-5">
          <h4>Top Up / Account Top Up</h4>
        </div>

        <div className="row">
          <div className="col-md-6 ">
            <div className="topup-card">
              <div className="pt-3">
                <div className="text-darky d-flex justify-content-between align-items-center">
                  <div>Top Up your Account</div>
                  <div><i className="fa fa-chevron-up" /></div>

                </div>
                <p className="pt-5 pb-3 lead">Current Balance: N50</p>
                <p className="text-light-general">Enter the Amount</p>
                <FormInput
                  className="input-normal"
                  placeholder="must be at least N1,000"
                />
              </div>

              <div className="pt-2">
                <p className="text-light-general">Choose payment method</p>
                <br />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="topup-box">
                    <img src={unchecked} alt="" className="pl-3 pt-4" />
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={transfer} alt="" />
                    </div>
                  </div>
                  <div className="topup-box">
                    <img src={unchecked} alt="" className="pl-3 pt-4" />
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={paypal} alt="" />
                    </div>
                  </div>
                  <div className="topup-box">
                    <img src={checked} alt="" className="pl-3 pt-4" />
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={master} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="heading-general">Payment method</div>
                <br />

                <div className="text-dark-sm pb-2">Abdulahim Adedeji</div>
                <div className="text-dark-sm pb-2">
                  Iju 14 Lagos, Nigeria, 110001
                </div>
                <div className="text-dark-sm pb-2">+2348161289000</div>

                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-light-general pt-2">
                    Information not correct ?{' '}
                    <span className="lead">Change it here</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 topup-card">
            <div className="text-darky d-flex justify-content-between align-items-center">
              <div>Top Up Review</div>
              <div><i className="fa fa-chevron-up" /></div>
            </div>

            <br />
            <br />
       
            <div className="card-top-active  ">
              <div className="text-white text-center">Credit Card</div>
              <div className="card-details">
                <form>
                  <FormInput
                    title="Card Number"
                    label_class="label-white"
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="input-card"
                    error= "Error. Incorrect card number, kindly check your card and the correct card number"
                
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <FormInput
                
                      title="Expiry Date"
                      placeholder="11/2021"
                      className="input-card"
                      label_class="label-white"
                      error= "Error. Incorrect Expiry Date, kindly check your card and the correct card number"

                    />
                    <FormInput
                    
                      title="CVV"
                      placeholder="XXX"
                      className="input-card"
                      label_class="label-white"
                      error= "Error. Incorrect CVV Num, kindly check your card and the correct CVV number"

                    />

                  </div>
                </form>
              </div>
              <br />

            </div>
            {/* <div className="card-topup ">
              <div className="text-darky text-center">Credit Card</div>
              <div className="card-details">
                <form>
                  <FormInput
                    title="Card Number"
                    label_class="label-normal"
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="input-card"
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <FormInput
                      title="Expiry Date"
                      placeholder="11/2021"
                      className="input-card"
                      label_class="label-normal"
                    />
                    <FormInput
                      title="CVV"
                      placeholder="XXX"
                      className="input-card"
                      label_class="label-normal"
                    />

                  </div>
                </form>
              </div>
              <br />

            </div> */}

            <br />
            <br />
            <br />
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn-light">BACK</button>
              <button className="btn-dark">FINISH</button>

            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
