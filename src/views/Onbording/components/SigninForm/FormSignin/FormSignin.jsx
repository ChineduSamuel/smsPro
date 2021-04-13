import React from "react";
import './FormSignin.css';
import useForm from '../../useForm/useForm';
import validate from '../../validateInfo/validateInfo';



const FormSignin = (submitForm) => {

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return (
    <div>
      <div className="split-screen">
        <div className="left">
          <section className="copy">
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
        <div className="right">
          <form className='form' onSubmit={handleSubmit}>
            <section className="copy">
              <div className="complogo">
                <img src="../../../assets/Slice 1.png" alt="company's logo" />
              </div>
              <h2>Login to your PROJECT SMS account</h2>
            </section>
            <div className="input-container email">
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
            <a href="#">
              <div className="p-3">
                <p>
                  <strong>Forgot your Login?</strong>
                </p>
              </div>
            </a>
            <button className="signup-btn" type="submit">
              LOGIN
            </button>
            <div className="login-container">
              <div className="p-2">
                <p>___________________Or____________________</p>
              </div>
            </div>
            <button className="signup-btn2" type="submit">
              Login with Gmail
            </button>
            <div className="p-4">
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
