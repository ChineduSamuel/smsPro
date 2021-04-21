import React, { useState, useEffect } from 'react'
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import MainLayout from "../../components/MainLayout/MainLayout";
import organization from "../../img/contactlist.PNG";
import Modal from "../../components/Modal/ModalScroll";

export default function Contactlist(props) {

    const [showModal, setShowModal] = useState(false);

    const showCreateModal = () => setShowModal(true);

    const gotoPosted = () => {
        props.history.push('/contactlist')
    }

    return (
        <MainLayout>
            <div className="organization">
                <div className="text-right mb-5">
                    <h4>Home / Contacts / Categories</h4>
                </div>
                <div className="cardy">
                    <div className="text-darky">
                        Category Name: <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h5>Touchcore</h5>
                            </button>
                            <div className="dropdown-menu">
                                ...
                        </div>


                        </div>



                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="mt-5 d-flex justify-content-between align-items-center">
                        <div>
                            <FormSelect
                                title="Filter :"
                                label_class="label-light"
                                placeholder="Select Field"
                                className="input-flex"
                            />
                        </div>
                        <div className="pt-4">
                            <FormInput placeholder="Search" className="input-flex" />
                        </div>
                    </div>
                    <div>
                        <button className="btn-dark">SEARCH</button>
                    </div>
                </div>
                <br />
                <br />


                <div className="pl-2 text-darky pb-3"></div>
                <div className="organization">
                    <div className="card-area">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-general text-darky">Contact List</p>
                            <p>
                                <i className="fa fa-chevron-up"></i>
                            </p>
                        </div>

                        <div className="pt-5 ">
                            <button className="btn-light" onClick={showCreateModal}>
                                {" "}
                                <i className="fa fa-plus-circle"></i> Add Customers
            </button>
                        </div>

                        <div className="organization-img d-flex justify-content-center align-items-center">
                            <div>
                                <img src={organization} alt="" />
                                <h5 className="sam_h5_contlist">No contact found <br />in this category <a href="#">Add</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    title="Create New Organization"
                    posted={gotoPosted}
                >

                    <FormInput
                        title="Name of Organzation"
                        placeholder="type name of organization"
                        className="input-normal"
                    />
                    <hr />
                    <div className="pt-3 d-flex justify-content align-items-center">
                        <div className="text-general">Add Team</div>
                        <div className="pl-5">
                            <i className="fa fa-plus-circle lead"></i>
                        </div>
                    </div>
                    <div className="pt-5 modal-box">
                        <FormInput title="Name of Team" placeholder="type name of team" className="input-modal" />
                        <div className="d-flex justify-content align-items-center">
                            <labe>SMS LIMIT</labe>
                            <input type="text" className="input-modal-sms" />
                        </div>
                    </div>
                    <hr />
                    <p className="text-center text-general">
                        Add members to your team in the organization
        </p>
                </Modal>

            </div>
        </MainLayout >
    )
}


