import React, { useState } from "react";
import FixedTopnav from "../Layouts/TopNav";
import FixedLeftNav from "../Layouts/Sidebar";
import Footer from '../Layouts/Footer'
export default function MainLayout(props) {
  return (
    <div className="mainlayout">
      <FixedTopnav  />
      <div
        className="main-body display-flex"
      >
      <FixedLeftNav />
      </div>
      <div
      style={{
        display: 'flex',
        position:'relative',
        marginTop: '2rem',
        marginLeft:'29rem',
        marginRight:'5rem'

      }}
      
      >
        <div className="container">
        {props.children}
        </div>

      </div>
      <Footer />
    </div>
  );
}
