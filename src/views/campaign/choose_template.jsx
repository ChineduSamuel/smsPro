import React from "react";
import FormSelect from '../../components/Forms/FormSelect'
import CardTemplate from '../../components/Cards/TemplateCards'
import MainLayout from "../../components/MainLayout/MainLayout";
export default function ChooseTemplate() {
  return (
    <MainLayout>
       <div className="Dashboard-page">
      <div className="text-right">
               <h4>Home / Choose Template</h4>
           </div>
       
        <div className="choose_template">
        <div className="heading-general pb-3 pt-5">
                    Choose Campaign Template
                </div>
            <div className="template-card">
                <div className="d-flex justify-content align-items-center">
                <FormSelect title="Select Template" className="mr-5" />
                <a href="#" className="btn-template btn-template-text ml-5 mt-2">Create Template</a>
                </div>

                <div className="card-boxes mt-5">
                    <div className="row">
                        <div className="col-1-of-3">
                            <p>Card Boxes</p>
                            {/* <div className="card-block">
                                <div className="top-box"></div>
                                <div className="box-card">
                                 
                                </div>
                            </div> */}
                        </div>
                        <div className="col-1-of-3">
                                <p>Card Boxes</p>
                            
                        </div>
                        <div className="col-1-of-3">
                                <p>Card Boxes</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
     
      </div>


    </MainLayout>
  );
}
