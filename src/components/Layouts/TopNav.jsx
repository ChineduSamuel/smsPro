import React from "react";
import logo from "../../img/logo.png";
import bell from "../../img/bell.png";
import user from "../../img/user.png";
import divider from "../../img/divider.png";
import search from "../../img/search.png";

export default function FixedTopnav(props) {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="nav-items">
          <li className="heading-primary">SMS Project</li>
          <li>
            <div className="d-flex justify-content">
              <span>
                <img src={search} alt="" className="" />
              </span>
              <span className="ml-5">
                <img src={bell} alt="" className="" />
              </span>
              <span className="ml-5 mr-5">
                {" "}
                <img src={divider} alt="" className="" />{" "}
              </span>
            </div>
          </li>
        </ul>
        <div className="user-nav">
          <div className="d-flex justify-content-between align-items-start">
            <div className="mr-4 ml-5 pt-2">
              <div className="heading-primary-sub">Lekan Wiliams</div>
              <div className="heading-primary-sub pl-5">N50</div>
            </div>
            <img src={user} alt="" className="mb-5 rounded-circle" />
          </div>
        </div>
      </div>
    </nav>
  );
}
