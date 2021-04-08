import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Single from "./single_organization";
import Table from '../../components/Table/TableBordered'
export default function Organizations() {
  return (
    <>
      <div className="organization">
        <div className="card-area">
            <div className="organization-history">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-darky">My Organizations</p>
            <i className="fa fa-chevron-up"></i>
          </div>
      
          <div className="text-general">
              <p>Organizations : 5</p>
              <p>No of Teams : 15</p>
              <p>No of members: 45</p>
              <p>No of SMS Sent : 124</p>

          </div>

          <div className="pt-5">
              <Table />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
