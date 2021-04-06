import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import people from '../../img/people.png'
export default function Single() {
  return (
      <>
      <div className="text-right mb-5">
        <h4>Home / Create New Organization</h4>
      </div>
      <div className="organization">
        <div className="card-area">
          <div className="organization-info">
            <p className="text-darky">Organizaton : Touchcore</p>
            <div className="d-flex">
              <p className="pt-4 text-darky pr-4">SMS LIMIT : </p>
              <button className="btn-green">N3500</button>
            </div>

            <div className="organization stats-area">
              <div className="row">
                <div className="col-1-of-3">
                  <p>Number of Teams: 56</p>
                  <p>Number of Members: 56</p>
                  <p>Total Campaigns sent: 56</p>
                </div>
                <div className="col-1-of-3">
                  <p>Date Created: 25/11/2020</p>
                  <p>Total SMS Sent: 56</p>
                  <p>Total Customers Reached: 56</p>
                </div>
                <div className="col-1-of-3">
                  <p>Total Links Shortened: 56</p>
                  <p>Total SMS Sent: 56</p>
                  <p>Total Customers Reached: 56</p>
                </div>
              </div>
            </div>

            <button className="btn-light">
              {" "}
              <i className="fa fa-plus-circle"></i> NEW TEAM
            </button>
            <div className="teams-area ">
              <p className="pb-4 text-darky">Teams :4</p>
              <div className="row">
                <div className="col-1-of-4">
                  <div className="organization-boxes active">
                    <p className="text-white">Marketing Team</p>
                    <h2 className="text-right text-white font-weight-bold">N3500</h2>
                    <div className="d-flex text-white justify-content-between align-items-center">
                      <div className="text-white">USSD :</div>
                      <div>1500 </div>
                    </div>
                    <div className="pt-2 d-flex text-white justify-content align-items-center">
                      <div>
                        Top Up <i className="fa fa-chevron-down"></i> :
                      </div>
                      <div>
                        Top Up <i className="fa fa-chevron-down"></i> :
                      </div>
                    </div>
                    <div className="text-right pt-2 text-white">press enter to complete</div>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="organization-boxes">
                      <div className="">
                          <div><img src={people} alt=""/></div>
                          <div className="pt-1 text-dark-sm">Name: Content Team</div>
                          <div className="text-dark-sm">SMS Limit: <span className="text-danger">N400.00</span></div>

                      </div>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="organization-boxes">
                  <div className="">
                          <div><img src={people} alt=""/></div>
                          <div className="pt-1 text-dark-sm">Name: Content Team</div>
                          <div className="text-dark-sm">SMS Limit: <span className="text-danger">N400.00</span></div>

                      </div>
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="organization-boxes">
                  <div className="">
                          <div><img src={people} alt=""/></div>
                          <div className="pt-1 text-dark-sm">Name: Content Team</div>
                          <div className="text-dark-sm">SMS Limit: <span className="text-danger">N400.00</span></div>

                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
