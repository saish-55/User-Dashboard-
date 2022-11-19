import React, { useState } from "react";

import PropTypes from "prop-types";

import "./loginpage-dark.css";

const LoginpageDark = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={`loginpage-dark-loginpage-dark ${props.rootClassName} `}>
      <div className="loginpage-dark-user-details">
        <div className="loginpage-dark-email-id">
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="E-mail"
            className="loginpage-dark-email input"
          />
          <div className="loginpage-dark-user-icon">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="loginpage-dark-user"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="loginpage-dark-password">
          <input
            type="text"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
            className="loginpage-dark-passwordinput input"
          />
          <div className="loginpage-dark-lockicon">
            <svg
              viewBox="0 0 658.2857142857142 1024"
              className="loginpage-dark-lock"
            >
              <path
                d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="loginpage-dark-remember-me">
          <button className="loginpage-dark-button button">
            {props.button}
          </button>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <button className="loginpage-dark-forgot-password button">
          {props.Forgot_Password}
        </button>
        <div className="loginpage-dark-bigicon">
          <svg viewBox="0 0 1024 1024" className="loginpage-dark-icon2">
            <path
              d="M896 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-341.333c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h341.333c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM725.333 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="loginpage-dark-login">
        <button className="loginpage-dark-login1 button">{props.Login}</button>
      </div>
    </div>
  );
};

LoginpageDark.defaultProps = {
  button: "Remember me",
  Login: "LOGIN",
  rootClassName: "",
  Passwordinput_placeholder: "placeholder",
  Email_placeholder: "placeholder",
  Forgot_Password: "Forgot Password?"
};

LoginpageDark.propTypes = {
  button: PropTypes.string,
  Login: PropTypes.string,
  rootClassName: PropTypes.string,
  Passwordinput_placeholder: PropTypes.string,
  Email_placeholder: PropTypes.string,
  Forgot_Password: PropTypes.string
};

export default LoginpageDark;
