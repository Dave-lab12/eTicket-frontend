import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import ResetPassword from "../../components/forgotPassword/resetPassword.component";

import Login from "../../components/login/login.component";
import "./login.style.css";

function Entry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
    switch (name) {
      case "Password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) alert("fill all the fields");

    //call api to submit the form
  };
  const formChange = (formType) => {
    setFormLoad(formType);
  };
  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!email) alert("fill all the fields");
  };
  return (
    <div className="login-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <Login
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            handleSubmit={handleSubmit}
            formChange={formChange}
          />
        )}
        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            handleResetSubmit={handleResetSubmit}
            formChange={formChange}
          />
        )}
      </Jumbotron>
    </div>
  );
}
export default Entry;
