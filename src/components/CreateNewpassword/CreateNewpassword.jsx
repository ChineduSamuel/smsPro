import React from 'react';
import './CreateNewpassword.css';
import useForm from '../useForm/useForm';
import validate from '../validateInfo/validateInfo';
import logo from '../../assets/Slice 1.png';



const CreateNewpassword = (submitForm) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div>
            <img className="sam_logo" src={logo} alt="company's logo" />

            <div className="sam_form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <section className="sam_create-newpassword">

                        <h3 className="sam_pwd-h3">Password Creation</h3>
                        <h4 className="sampwd-h4">Create New Paswword</h4>

                        <div className="samnewpass_input-container password">
                            <label className="sam_createnewplabel" for="password">Enter New Password:</label>
                            <input
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.password}</p>}
                        </div>

                        <div className="samnewpass_input-container password">
                            <label className="sam_createnewplabel" for="password2">Re-enter Password:</label>
                            <input
                                id="password2"
                                name="password2"
                                placeholder="Retype password"
                                type="password"
                                value={values.password2}
                                onChange={handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </div>
                        <button className="samcreate_signup-btn" type="submit">PROCEED</button>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default CreateNewpassword
