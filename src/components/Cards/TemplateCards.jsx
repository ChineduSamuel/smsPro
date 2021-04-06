import React from "react";
import logo from '../../img/blue.png'

export default function TemplateCards() {
  return (
    <div>
       <div className="template-box">
                    <div className="template-box-below">
                      <div className="template-box-top">
                        <div className="mt-5 fore-title">Happy Birthday</div>
                        <div className="template-box-inner">
                          <div className="d-flex justify-content-center align-items-center">
                            <p><img src={logo} alt=""/></p>
                          </div>
                        </div>
                      </div>
                      <div className="below-text">
                        <div className="fore-title">Ready to save Big? N500,000 when you spend N3000 or more between one week.Click here to conitnue</div>
                        <div className="text-center mt-4">
                        <a href="#" className="btn-box-template">USE</a>
                      </div>
                      </div>
                      
                    </div>
                  </div>
                  <br />
    </div>
  );
}
