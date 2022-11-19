import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./top-navbar-home.css";
import CountrySelect from "./CountrySelect";

const TopNavbarHome = (props) => {
  return (
    <div className="top-navbar-home-top-navbar">
      <div className="top-navbar-home-searchbar">
        <svg viewBox="0 0 1024 1024" className="top-navbar-home-icon">
          <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
        </svg>
        <input
          className="top-navbar-home-textinput input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="top-navbar-home-language">
        <CountrySelect />
      </div>
      <div className="top-navbar-home-usersinfo">
        <img
          alt={props.Userimg_alt}
          src={props.Userimg_src}
          className="top-navbar-home-userimg"
        />
        <div
          data-thq="thq-dropdown"
          className="top-navbar-home-userinfo list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="top-navbar-home-dropdown-toggle4"
          >
            <span className="top-navbar-home-text">{props.text}</span>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="top-navbar-home-dropdown-list1"
          >
            <li
              data-thq="thq-dropdown"
              className="top-navbar-home-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="top-navbar-home-dropdown-toggle5"
              >
                <span className="top-navbar-home-text1">{props.text1}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="top-navbar-home-dropdown4 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="top-navbar-home-dropdown-toggle6"
              >
                <span className="top-navbar-home-text2">{props.text2}</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="top-navbar-home-dropdown5 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="top-navbar-home-dropdown-toggle7"
              >
                <span className="top-navbar-home-text3">{props.text3}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <svg viewBox="0 0 1024 1024" className="top-navbar-home-notification">
        <path d="M682 726v-256q0-82-46-137t-124-55-124 55-46 137v256h340zM768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-34 0-60-25t-26-59h172q0 34-26 59t-60 25z"></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="top-navbar-home-one">
        <path d="M854 768h-86v-454l-128 44v-72l200-72h14v554zM426 298v172h172v84h-172v172h-84v-172h-172v-84h172v-172h84z"></path>
      </svg>
      <Link to="/home-dark" className="top-navbar-home-navlink">
        <svg viewBox="0 0 1024 1024" className="top-navbar-home-nighmode">
          <path d="M938.496 549.632c0.939-9.941-1.621-20.309-8.021-29.056-13.867-19.029-40.576-23.211-59.605-9.344-40.533 29.568-87.851 46.336-136.021 49.579-58.368 3.925-118.016-12.075-168.533-49.408-56.875-42.027-91.264-103.040-100.992-167.893s5.291-133.291 47.317-190.123c6.059-8.149 9.216-18.56 8.149-29.483-2.261-23.467-23.125-40.619-46.592-38.315-96.341 9.387-184.064 50.347-251.52 113.109-74.069 68.907-123.819 164.139-133.845 272.469-10.837 117.291 26.923 227.968 96.683 311.936s171.605 141.355 288.939 152.192 227.968-26.923 311.936-96.683 141.355-171.605 152.192-288.939zM834.859 626.091c-20.907 58.155-56.96 108.501-103.083 146.816-67.243 55.851-155.648 86.016-249.515 77.355s-175.275-54.528-231.125-121.771-86.016-155.648-77.355-249.515c7.979-86.699 47.659-162.731 106.965-217.856 33.365-31.061 72.96-55.467 116.523-71.339-19.456 53.931-24.619 111.189-16.384 166.357 12.928 86.315 58.88 167.851 134.656 223.872 67.371 49.792 147.115 71.168 224.981 65.92 32.085-2.133 63.829-8.832 94.293-19.84z"></path>
        </svg>
      </Link>
    </div>
  );
};

TopNavbarHome.defaultProps = {
  Userimg_src: "/playground_assets/user1-removebg-preview-200h.png",
  India: "India",
  text3: "Signout",
  French: "French",
  text: "Saish",
  Languages: "English",
  Userimg_alt: "image",
  text1: "Account Settings",
  textinput_placeholder: "placeholder",
  Spanish: "Spanish",
  text2: "Stats"
};

TopNavbarHome.propTypes = {
  Userimg_src: PropTypes.string,
  India: PropTypes.string,
  text3: PropTypes.string,
  French: PropTypes.string,
  text: PropTypes.string,
  Languages: PropTypes.string,
  Userimg_alt: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  Spanish: PropTypes.string,
  text2: PropTypes.string
};

export default TopNavbarHome;
