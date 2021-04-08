import React from "react";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import MainLayout from "../../components/MainLayout/MainLayout";

export default function Invite() {
  return (
    <MainLayout>
      <div className="organization">
        <div className="cardy">
          <div className="text-darky ">
            Select Organization and Team member to add member
          </div>
          <br />
          <br />
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <div>
              <FormSelect
                title="Select Organization :"
                label_class="label-light"
                placeholder="Select Organization"
                className="select-flex"
              />
            </div>
            <div>
              <FormSelect
                label_class="label-light"
                title="Select Team :"
                placeholder="Select Team"
                className="select-flex"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="cardy">
          <div className="text-darky">Add Member Details</div>
          <br />
          <div>
            <div className="row pt-5">
              <div className="col-md-6 pb-4">
                <FormInput
                  title="FirstName"
                  label_class="label-light"
                  placeholder="Enter member's first name"
                  className="input-normal"
                />
              </div>
              <div className="col-md-6 pb-4">
                <FormInput
                  title="LastName"
                  label_class="label-light"
                  placeholder="Enter member's last name"
                  className="input-normal"
                />
              </div>
              <div className="col-md-6 pb-4">
                <FormInput
                  title="Phone Number"
                  placeholder="080XXXXXXXX"
                  label_class="label-light"
                  className="input-normal"
                />
              </div>
              <div className="col-md-6 pb-4">
                <FormSelect
                  title="Gender"
                  label_class="label-light"
                  placeholder="Select Gender"
                  className="select-normal-long"
                />
              </div>
              <div className="col-md-6 pb-2">
                <FormInput
                  label_class="label-light"
                  title="Email Address"
                  className="input-normal"
                  placeholder="abcdefg@gmail.com"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn-light">CANCEL</button>
              <button className="btn-dark">SEND INVITE</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
