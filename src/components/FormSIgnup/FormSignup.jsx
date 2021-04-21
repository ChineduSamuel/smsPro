import React from 'react';
import useForm from '../useForm/useForm';
import validate from '../validateInfo/validateInfo';
import './FormSignup.css';
import logo from '../../assets/Slice 1.png';

const FormSignup = (submitForm) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (

        <div className="sam_split-screen">


            <div className="sam_left">
                <section className="sam_copy">
                    <h1>Connect with your customers through an express bulk SMS Service</h1>
                    <p>With the best amazing unlimited offers!</p>
                </section>
            </div>

            <div className="sam_right" >
                 <img src={logo} className="sam_logo" /> 
                <form className='form' onSubmit={handleSubmit}>
                    <section className="sam_copy">
                        <h2>Sign up to create your free Account</h2>
                    </section>
                    <div className="sam_input-container email">
                        <label for="email">EMAIL ADDRESS:</label>
                        <input id="email" name="email" placeholder="eg: abcd@xyz.com" type="email"
                            value={values.email}
                            onChange={handleChange}

                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="sam_text-container">

                        <div className="sam_input-container fname">
                            <label for="fname">FIRST NAME:</label>
                            <input id="fname" name="fname" placeholder="Input your first name" type="text"
                                value={values.fname}
                                onChange={handleChange}
                            />
                            {errors.fname && <p>{errors.fname}</p>}

                        </div>

                        <div className="sam_input-container phone">
                            <label for="phone">PHONE NUMBER:</label>
                            <input
                                id="phone"
                                name="phone"
                                placeholder="80XXXXXXXX"
                                type="text"
                                value={values.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p>{errors.phone}</p>}

                        </div>
                        <div className="sam_input-container lname">
                            <label for="lname">Last NAME:</label>
                            <input id="lname" name="lname" placeholder="Input your last name" type="text"
                                value={values.lname}
                                onChange={handleChange}
                            />
                            {errors.lname && <p>{errors.lname}</p>}

                        </div>

                        <div className="sam_input-container country">
                            <label for="country">COUNTRY:</label>
                            <input
                                id="country"
                                name="country"
                                placeholder="Please select your country"
                                type="text"
                                value={values.country}
                                onChange={handleChange}
                            />
                            {errors.country && <p>{errors.country}</p>}
                        </div>
                    </div>

                    <div className="input-container password">
                        <label for="password">PASSWORD:</label>
                        <input
                            id="password"
                            name="password"
                            placeholder="Must be between  8 and 30 characters"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="sam_input-container password">
                        <label for="password2">RETYPE PASSWORD:</label>
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
                    <div className="sam_input-container cta">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                By creating an account, you agree to our <a href="#"> Terms of Service,</a>   <a href="#">Privacy Policy,</a> and default  <a href="#">Notification Settings.</a>
                        </label>
                    </div>
                    <button className="sam_signup-btn" type="submit">SIGN UP</button>
                    <div className="login-container">
                        <p>Already have an account? <a href="/login"><strong>LogIn</strong></a></p>
                    </div>
                    <button className="sam_signup-btn2" type="submit"> Sign up with Gmail</button>
                </form>
            </div>
        </div>

    )
}

export default FormSignup
