import React from 'react'
import './ForgotPassowrd.css';
import useForm from '../useForm/useForm';
import validate from '../validateInfo/validateInfo';
import logo from '../../assets/Slice 1.png'


const ForgotPassword = (submitForm) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div>

            <img  className="logo"  src={logo} alt="company's logo" />

            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <section className="forgotform">

                        <h2>Forgot Password?</h2>


                        <div className="input-container password">
                            <label for="email">Enter your email address</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="abcd@xyz.com"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <button className="signup-btn" type="submit">PROCEED</button>
                    </section>
                </form>
            </div>

        </div>

    );
}

export default ForgotPassword
