import React, { useState } from "react";
// import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
// import FormSignin from "./components/SigninForm/FormSignin/FormSignin";
import FormSignup from "./components/FormSIgnup/FormSignup";
import FormSuccess from "./components/FormSuccess/FormSuccess";
// import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
// import CreateNewpassword from "./components/CreateNewpassword/CreateNewpassword";
// import Signupsuccessfully from "./components/SignupSuccessfully/Signupsuccessfully";
import Profile from "./components/ProfileModals/Profile";
// import LoginOTPpopup from "./components/LoginOTPpopup/LoginOTPpopup";
// import ContactaddSuccess from "./components/ContactaddSuccess/ContactaddSuccess";
// import ContactCategory from "./components/Contactcategory/ContactCategory";
import LoginOTPpopup from "./components/LoginOTPpopup/LoginOTPpopup";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};

export default Form;
