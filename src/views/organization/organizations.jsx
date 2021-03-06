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
       
       

          <div className="pt-5">
              <Table />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
