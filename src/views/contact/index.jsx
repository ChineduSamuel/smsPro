import React from "react";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import MainLayout from "../../components/MainLayout/MainLayout";
import Table from '../../components/Table/TableBordered'

export default function Invite() {
  return (
    <MainLayout>
      <div className="organization">
      <div className="text-right mb-5">
        <h4>Customer / Customer List</h4>
      </div>
        <div className="cardy">
          <div className="text-darky ">
            Search Customers/ Categories
          </div>
          <br />
          <br />
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <div>
              <FormSelect
                title="Filter :"
                label_class="label-light"
                placeholder="Select Field"
                className="select-flex"
              />
            </div>
            <div className="pt-4">
              <FormInput  placeholder="Select Team" className="input-flex" />
            </div>
          </div>
          <div>
            <button className="btn-dark">SEARCH</button>
          </div>
        </div>
        <br />
        <br />

        <div className="cardy">
          <div className="customer-table">
            <p className="text-darky">Customer List</p>
            <div className="pt-5">
              <Table />
            </div>

          </div>
         

        </div>
       

      </div>
    </MainLayout>
  );
}
