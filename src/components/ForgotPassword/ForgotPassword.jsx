import React from 'react'
import './ForgotPassowrd.css';
import useForm from '../useForm/useForm';
import validate from '../validateInfo/validateInfo';
import logo from '../../assets/Slice 1.png'


const ForgotPassword = (submitForm) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div>

            <img className="samlogo" src={logo} alt="company's logo" />

            <div className="sam_form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <section className="sam_forgotform">

                        <h2>Forgot Password?</h2>


                        <div className="sam_input-container email">
                            <label for="email">Enter your email address</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="abcd@xyz.com"
                                type="sam_email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <button className="sam_signup-btn" type="submit">PROCEED</button>
                    </section>
                </form>
            </div>

        </div>

    );
}

export default ForgotPassword
