import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./top-navbar-dark.css";
import CountrySelect from "./CountrySelect";

const TopNavbarDark = (props) => {
  return (
    <div className="top-navbar-dark-top-navbar">
      <div className="top-navbar-dark-searchbar">
        <svg viewBox="0 0 1024 1024" className="top-navbar-dark-icon">
          <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="top-navbar-dark-textinput input"
        />
      </div>
      <div className="top-navbar-dark-language">
        <CountrySelect />
      </div>
      <div className="top-navbar-dark-usersinfo">
        <img
          alt={props.Userimg_alt}
          src={props.Userimg_src}
          className="top-navbar-dark-userimg"
        />
        <div
          data-thq="thq-dropdown"
          className="top-navbar-dark-userinfo list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="top-navbar-dark-dropdown-toggle"
          >
            <span className="top-navbar-dark-text">{props.text}</span>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="top-navbar-dark-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="top-navbar-dark-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="top-navbar-dark-dropdown-toggle1"
              >
                <span className="top-navbar-dark-text1">{props.text1}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="top-navbar-dark-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="top-navbar-dark-dropdown-toggle2"
              >
                <span className="top-navbar-dark-text2">{props.text2}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="top-navbar-dark-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="top-navbar-dark-dropdown-toggle3"
              >
                <span className="top-navbar-dark-text3">{props.text3}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <svg viewBox="0 0 1024 1024" className="top-navbar-dark-notification">
        <path d="M682 726v-256q0-82-46-137t-124-55-124 55-46 137v256h340zM768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-34 0-60-25t-26-59h172q0 34-26 59t-60 25z"></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="top-navbar-dark-one">
        <path d="M854 768h-86v-454l-128 44v-72l200-72h14v554zM426 298v172h172v84h-172v172h-84v-172h-172v-84h172v-172h84z"></path>
      </svg>
      <Link to="/" className="top-navbar-dark-navlink">
        <svg viewBox="0 0 1024 1024" className="top-navbar-dark-icon04">
          <path d="M512 295.851l42.667-125.184c3.072-9.088 3.328-19.285 0-29.099-8.021-23.595-33.664-36.181-57.216-28.117-23.595 8.064-36.139 33.621-28.117 57.216l42.667 125.184z"></path>
          <path d="M170.667 469.333c-9.088-3.072-19.285-3.328-29.099 0-23.595 8.021-36.181 33.664-28.117 57.216 8.064 23.595 33.621 36.139 57.216 28.117l125.184-42.667-125.184-42.667z"></path>
          <path d="M512 728.149l-42.667 125.184c-3.072 9.088-3.328 19.285 0 29.099 8.021 23.595 33.664 36.181 57.216 28.117 23.595-8.064 36.139-33.621 28.117-57.216l-42.667-125.184z"></path>
          <path d="M910.549 497.365c-8.021-23.595-33.621-36.181-57.216-28.117l-125.184 42.667 125.184 42.667c9.088 3.072 19.285 3.328 29.099 0 23.552-8.021 36.139-33.664 28.117-57.216z"></path>
          <path d="M240.469 300.8l118.656 58.325-58.325-118.656c-4.267-8.619-11.307-16-20.565-20.565-22.357-11.008-49.365-1.792-60.373 20.565-10.965 22.315-1.749 49.365 20.608 60.331z"></path>
          <path d="M219.861 743.765c-10.965 22.315-1.749 49.323 20.565 60.331 22.315 10.965 49.365 1.749 60.331-20.565l58.325-118.656-118.656 58.325c-8.576 4.224-15.957 11.221-20.565 20.565z"></path>
          <path d="M783.488 723.157l-118.656-58.325 58.325 118.656c4.267 8.619 11.264 16 20.565 20.565 22.315 10.965 49.323 1.749 60.331-20.565 11.008-22.315 1.792-49.365-20.565-60.331z"></path>
          <path d="M804.011 280.149c11.008-22.357 1.792-49.365-20.523-60.373-22.315-10.965-49.365-1.749-60.331 20.565l-58.411 118.741 118.699-58.368c8.619-4.267 16-11.264 20.565-20.565z"></path>
          <path d="M512 320c-105.856 0-192 86.144-192 192s86.144 192 192 192 192-86.144 192-192-86.144-192-192-192z"></path>
        </svg>
      </Link>
    </div>
  );
};

TopNavbarDark.defaultProps = {
  textinput_placeholder: "placeholder",
  text1: "Account Settings",
  Userimg_alt: "image",
  text2: "Stats",
  text3: "Signout",
  text: "Saish",
  Userimg_src: "/playground_assets/user1-removebg-preview-200h.png"
};

TopNavbarDark.propTypes = {
  textinput_placeholder: PropTypes.string,
  text1: PropTypes.string,
  Userimg_alt: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  Userimg_src: PropTypes.string
};

export default TopNavbarDark;
