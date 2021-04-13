import React from "react";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import MainLayout from "../../components/MainLayout/MainLayout";
import Table from '../../components/Table/TableBordered'
import checked from '../../img/checked.png'
import unchecked from '../../img/unchecked.png'
import transfer from '../../img/transfer.png'
import master from '../../img/master.png'
import paypal from '../../img/paypal.png'


export default function TopUpIndex() {
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
                    <div className="text-darky d-flex justify-content-between align-items-center">Top Up your Account</div>
                    <p className="pt-5 pb-3 lead">Current Balance:  N50</p>
                    <p className="text-light-general">Enter the Amount</p>
                    <FormInput label_class= "input-normal" placeholder="must be at least 1,000"  />
                    </div>

                    <div className="pt-2">
                        <p className="text-light-general">Choose payment method</p>
                        <br />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="topup-box">
                                    <img src={unchecked} alt=""  className="pl-3 pt-4"/>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={transfer} alt=""/>
                                    </div>

                            </div>
                            <div className="topup-box">
                                
                            <img src={unchecked} alt="" className="pl-3 pt-4"/>
                            <div className="d-flex justify-content-center align-items-center">
                                        <img src={paypal} alt=""/>
                                    </div>
                            </div>
                            <div className="topup-box">
                            <img src={checked} alt="" className="pl-3 pt-4"/>
                            <div className="d-flex justify-content-center align-items-center">
                                        <img src={master} alt=""/>
                                    </div>
                            </div>
                            </div>
                    </div>

                    <div className="pt-5">
                        <div className="text-darky">Payment method</div>
                        <div className="text-dark">Abdulahim Adedeji</div>
                        <div className="text-dark">Iju 14 Lagos, Nigeria, 110001</div>
                        <div className="text-dark">+2348161289000</div>

                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-general-light">Information not correct ? <span className="lead">Chang it here</span></p>
                        </div>


                    </div>
                </div>

            
                

            </div>
            <div className="col-1-of-2 cardy">
                <p>second page </p>

</div>
         

        </div>
       

      </div>
    </MainLayout>
  );
}
