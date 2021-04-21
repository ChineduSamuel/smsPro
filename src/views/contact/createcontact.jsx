import React from 'react'
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "../../components/Forms/FormSelect";
import MainLayout from "../../components/MainLayout/MainLayout";


function createcontact() {
    return (
        <MainLayout>
            <div className="organization">
                <div className="text-right mb-5">
                    <h4>Home / Contacts / Categories</h4>
                </div>
             <br />
                <div className="cardy">
                    <div className="text-darky">Create Contact</div>
                    <br />
                    <div>
                        <div className="row pt-5">
                            <div className="col-md-6 pb-4">
                                <FormInput
                                    title="First Name"
                                    label_class="label-light"
                                    placeholder="Enter member's first name"
                                    className="input-normal"
                                />
                            </div>
                            <div className="col-md-6 pb-4">
                                <FormInput
                                    title="Last Name"
                                    label_class="label-light"
                                    placeholder="Enter member's last name"
                                    className="input-normal"
                                />
                            </div>
                            <div className="col-md-6 pb-4">
                                <FormInput
                                    title="Phone Number"
                                    placeholder="080XXXXXXXX"
                                    label_class="label-light"
                                    className="input-normal"
                                />
                            </div>
                            <div className="col-md-6 pb-4">
                                <FormInput
                                    title="Date of Birth"
                                    placeholder="03 Dec 1994"
                                    label_class="label-light"
                                    className="input-normal"
                                />
                            </div>
                            <div className="col-md-6 pb-4">
                                <FormSelect
                                    title="Gender"
                                    label_class="label-light"
                                    placeholder="Select Gender"
                                    className="input-normal"
                                />
                            </div>

                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn-light">CANCEL</button>
                            <button className="btn-dark">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default createcontact
