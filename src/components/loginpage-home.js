import React, {useState} from "react";

import PropTypes from "prop-types";

import "./loginpage-home.css";
const LoginpageHome = (props) => {

   /* const[user, setUser] = useState({
        name: "",
        email: "",


    });

      let name, value;
    const getUserData = (event) =>{
      name= event.target.name;
      value= event.target.value;

      setUser({...user, [name]: value});
    }*/


  return (
    <div className={`loginpage-home-loginpage ${props.rootClassName} `}>
      <div className="loginpage-home-user-details">
        <div className="loginpage-home-email-id">

          <input
            className="loginpage-home-email input"
            name="email"
            type="E-mail"
            placeholder="E-mail"
           // value={user.name}
            //onChange={getUserData}
          />

          <div className="loginpage-home-user-icon">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="loginpage-home-user"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="loginpage-home-password">
          
          <input
            type="text"
            name="password"
            placeholder="Password"
           // value={user.email}
            //onChange={getUserData}
            className="loginpage-home-passwordinput input"
          />

          <div className="loginpage-home-lockicon">
            <svg
              viewBox="0 0 658.2857142857142 1024"
              className="loginpage-home-lock"
            >
              <path
                d="M182.857 438.857h292.571v-109.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286v109.714zM658.286 493.714v329.143c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-329.143c0-30.286 24.571-54.857 54.857-54.857h18.286v-109.714c0-140.571 115.429-256 256-256s256 115.429 256 256v109.714h18.286c30.286 0 54.857 24.571 54.857 54.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="loginpage-home-remember-me">
          <button className="loginpage-home-button button">
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
        <button className="loginpage-home-forgot-password button">
          {props.Forgot_Password}
        </button>
        <div className="loginpage-home-bigicon">
          <svg viewBox="0 0 1024 1024" className="loginpage-home-icon2">
            <path
              d="M896 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-341.333c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h341.333c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM725.333 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="loginpage-home-login">
        <button className="loginpage-home-login1 button">{props.Login}</button>
      </div>
    </div>
  );
};

LoginpageHome.defaultProps = {
  Forgot_Password: "Forgot Password?",
  rootClassName: "",
  Passwordinput_placeholder: "placeholder",
  Email_placeholder: "placeholder",
  button: "Remember me",
  Login: "LOGIN"
};

LoginpageHome.propTypes = {
  Forgot_Password: PropTypes.string,
  rootClassName: PropTypes.string,
  Passwordinput_placeholder: PropTypes.string,
  Email_placeholder: PropTypes.string,
  button: PropTypes.string,
  Login: PropTypes.string
};

export default LoginpageHome;
