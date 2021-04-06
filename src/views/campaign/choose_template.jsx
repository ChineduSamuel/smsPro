import React, { useState, useEffect } from "react";
import FormSelect from "../../components/Forms/FormSelect";
import CardTemplate from "../../components/Cards/TemplateCards";
import FormInput from "../../components/Forms/FormInput";
import MainLayout from "../../components/MainLayout/MainLayout";
import FormText from "../../components/Forms/FormText";

export default function ChooseTemplate() {
  const [activeIndex, setActiveIndex] = useState(0);
  const phaseTwo = () => {
    setActiveIndex(1);
  };
  return (
    <MainLayout>
      <div className="">
        <div className="text-right">
          <h4>Home / Choose Template</h4>
        </div>

        <div className="choose_template  ">
          {activeIndex === 0 && (
            <div>
              <div className="heading-general pb-3 pt-5">
                Choose Campaign Template
              </div>
              <div className="template-card ">
                <div className="ml-4 d-flex justify-content align-items-center">
                  <FormSelect
                    title="Select Template"
                    className="mr-5"
                    placeholder="Select"
                  />
                  <button
                    className="btn-template btn-template-text ml-5 mt-2"
                    onClick={phaseTwo}
                  >
                    Create Template
                  </button>
                </div>

                <div className="box-area">
                  <div className="row">
                    <div className="col-md-4 mb-5">
                      <CardTemplate />
                    </div>
                    <div className="col-md-4 mb-5">
                      <CardTemplate />
                    </div>
                    <div className="col-md-4 mb-5">
                      <CardTemplate />
                    </div>
                    <div className="col-md-4 mb-5">
                      <CardTemplate />
                    </div>
                    <div className="col-md-4 mb-5">
                      <CardTemplate />
                    </div>
                    <div className="col-md-4 mb-5">
                      <CardTemplate />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeIndex === 1 && (
            <div>
              <div className="heading-general pb-3 pt-5">
                Create Campaign Template
              </div>
              <div className="template-card">
                <div className="template-card-add">
                  <p className="heading-general">Set Up Template</p>
                  <div className="form-area mt-5">
                    <FormInput
                      title="Template Title"
                      placeholder="My Promo Soap"
                    />
                    <FormSelect title="Category" />
                    <FormText
                      title="From"
                      placeholder="type your message here"
                    />
                    <div className="d-flex justify-content align-items-center">
                      <div className="mr-5 pr-5 text-general">Message</div>
                      <div className="text-general">Characters</div>
                    </div>
                    <div style={{ width: "100%" }}>
                      <div className="mt-5 d-flex justify-content-between align-items-center">
                        <button className="btn-create-template">CANCEL</button>
                        <button className="btn-dark">SAVE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
