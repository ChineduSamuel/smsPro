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
                  <p className="text-light-general pt-2 text-right">
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
            <div className="text-dark-sm d-flex justify-content-between">
              <div>Amount to Credit</div>
              <div>1000</div>

            </div>
            <br />
            <div className="text-dark-sm d-flex justify-content-between">
              <div>VAT</div>
              <div>0.00</div>

            </div>

            <br />
            <br />
            <hr />
            <div className="lead d-flex justify-content-between">
              <div className="lead">Total Charged</div>
              <div>N1000</div>

            </div>
            <hr />
            <br />
            <br />
            <div className="text-dark-sm d-flex justify-content-between">
              <div>Previous Balance</div>
              <div>N50.00</div>

            </div>
            <div className=" lead d-flex justify-content-between">
              <div className="lead">New Balance</div>
              <div>N1500</div>

            </div>
            <br />
            <br />
            <br />
            <br />

            <p className="text-dark-sm text-center">
              I accept the
              {' '}
              <span className="lead">Terms and Agreement of Transaction</span>
            </p>
            <div className="pt-5 text-center">
              <br />
              <button className="btn-dark">MAKE PAYMENT</button>

            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
