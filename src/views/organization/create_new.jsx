import React, { useState, useEffect } from "react";
import organization from "../../img/organization.png";
import Modal from "../../components/Modal/Modal";
import MainLayout from "../../components/MainLayout/MainLayout";
import FormInput from "../../components/Forms/FormInput";

export default function Create(props) {
  const [showModal, setShowModal] = useState(false);

  const showCreateModal = () => setShowModal(true);

  const gotoPosted = () => {
    props.history.push('/organizations')
  }
  return (
    <MainLayout>
      <div className="text-right mb-5">
        <h4>Home / Create New Organization</h4>
      </div>
      <div className="pl-2 text-darky pb-3">My Organization</div>
      <div className="organization">
        <div className="card-area">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-general text-darky">My Organization</p>
            <p>
              <i className="fa fa-chevron-up"></i>
            </p>
          </div>

          <div className="pt-5 ">
            <button className="btn-light" onClick={showCreateModal}>
              {" "}
              <i className="fa fa-plus-circle"></i> Create New Organization
            </button>
          </div>

          <div className="organization-img d-flex justify-content-center align-items-center">
            <div>
              <img src={organization} alt="" />
            </div>
            {/* <div className="organization-footer">
              <p className="text-general">No organizations found</p>
              <p className="text-general">
                In this group <span className="lead">Create</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Create New Organization"
        posted = {gotoPosted}
      >

        <FormInput
          title="Name of Organzation"
          placeholder="type name of organization"
        />
        <hr />
        <div className="pt-3 d-flex justify-content align-items-center">
          <div className="text-general">Add Team</div>
          <div className="pl-5">
            <i className="fa fa-plus-circle lead"></i>
          </div>
        </div>
        <div className="pt-3 modal-box">
          <FormInput title="Name of Team" placeholder="type name of team" />
          <FormInput title="SMS LIMIT" placeholder="N" />
        </div>
        <hr />
        <p className="text-center text-general">
          Add members to your team in the organization
        </p>
      </Modal>
    </MainLayout>
  );
}
