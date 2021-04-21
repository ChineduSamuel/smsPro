import React from "react";
import './FormSignin.css';
import useForm from '../../useForm/useForm';
import validate from '../../validateInfo/validateInfo';
import logo from '../../../assets/Slice 1.png'



const FormSignin = (submitForm) => {

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return (
    <div>
      <div className="sam_split-screen">
        <div className="sam_left">
          <section className="sam_copy">
            <h1>
              Reach a wide range of customers <br />
              from a single spot
            </h1>
            <h2>
              Get your desired text message to your <br />
              desired people
            </h2>
          </section>
        </div>
        <div className="sam_right">
          <form className='sam_form' onSubmit={handleSubmit}>
            <section className="sam_copy">
              <div className="sam_complogo">
                <img src={logo} className="sam_logo" alt="company's logo" />
              </div>
              <h2>Login to your PROJECT SMS account</h2>
            </section>
            <div className="sam_input-container email">
              <label for="email">EMAIL ADDRESS:</label>
              <input
                id="email"
                name="email"
                placeholder="eg: abcd@xyz.com"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="sam_input-container password">
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
            <a href="#">
              <div className="sam_p-3">
                <p>
                  <strong>Forgot your Login?</strong>
                </p>
              </div>
            </a>
            <button className="sam_signup-btn" type="submit">
              LOGIN
            </button>
            <div className="sam_login-container">
              <div className="sam_p-2">
                <p>___________________Or____________________</p>
              </div>
            </div>
            <button className="sam_signup-btn2" type="submit">
              Login with Gmail
            </button>
            <div className="sam_p-4">
              <a href="/register">
                <p>Don't have an account yet? Signup here!</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSignin;
