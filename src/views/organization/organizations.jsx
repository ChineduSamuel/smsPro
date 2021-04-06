import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Single from "./single_organization";
import Table from '../../components/Table/TableBordered'
export default function Organizations() {
  return (
    <>
      <div className="organization">
        <div className="card-area">
            <div className="organizartion-history">
          <div className="d-flex justify-content-between align-items-center">
            <p className="lead">Market Team Members</p>
            <i className="fa fa-chevron-up"></i>
          </div>
          <p className="text-general">
            Members added can send campaigns for the department
          </p>
          <div className=" pt-5 d-flex justify-cotent-between align-items-center">
            <button className="btn-light mr-5 pr-5">
              <i className="fa fa-plus-circle"></i> Add Member
            </button>
            <button className="btn-dark">
              <i className="fa fa-plus-circle"></i> Download As CSV
            </button>
            <button className="btn-light ml-auto">
              <i className="fa fa-settings"></i> Perform Actions
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="pt-5">
              <Table />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
