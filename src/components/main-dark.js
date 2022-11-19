import React from "react";

import PropTypes from "prop-types";

import "./main-dark.css";
import Chart from "./Chart";

const MainDark = (props) => {
  return (
    <div className={`main-dark-main ${props.rootClassName} `}>
      <div className="main-dark-employee">
        <span className="main-dark-employe">{props.Employe}</span>
        <span className="main-dark-number">{props.Number}</span>
        <span className="main-dark-percentage">{props.Percentage}</span>
        <span className="main-dark-active-workers">{props.Active_Workers}</span>
        <div className="main-dark-logo1">
          <svg viewBox="0 0 731.4285714285713 1024" className="main-dark-icon">
            <path
              d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="main-dark-projects">
        <span className="main-dark-project">{props.Project}</span>
        <span className="main-dark-number1">{props.Number1}</span>
        <span className="main-dark-percentage1">{props.Percentage1}</span>
        <span className="main-dark-available-projects">
          {props.Available_projects}
        </span>
        <div className="main-dark-logo2">
          <svg viewBox="0 0 1024 1024" className="main-dark-icon02">
            <path
              d="M448 576v-448c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448c0-72.034-17.028-140.084-47.236-200.382l-400.764 200.382zM912.764 247.618c-73.552-146.816-225.374-247.618-400.764-247.618v448l400.764-200.382z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="main-dark-clients">
        <span className="main-dark-client">{props.Client}</span>
        <span className="main-dark-number2">{props.Number2}</span>
        <span className="main-dark-percentage2">{props.Percentage2}</span>
        <span className="main-dark-active-clients">{props.Active_clients}</span>
        <div className="main-dark-logo3">
          <svg viewBox="0 0 1024 1024" className="main-dark-icon04">
            <path
              d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="main-dark-earnings">
        <span className="main-dark-earn">{props.Earn}</span>
        <span className="main-dark-number3">{props.Number3}</span>
        <span className="main-dark-percentage3">{props.Percentage3}</span>
        <span className="main-dark-active-clients1">
          {props.Active_clients1}
        </span>
        <div className="main-dark-logo4">
          <svg
            viewBox="0 0 583.4605714285714 1024"
            className="main-dark-icon06"
          >
            <path
              d="M558.857 677.143c0 116.571-83.429 208.571-204.571 228.571v100c0 10.286-8 18.286-18.286 18.286h-77.143c-9.714 0-18.286-8-18.286-18.286v-100c-133.714-18.857-206.857-98.857-209.714-102.286-5.714-6.857-6.286-16.571-1.143-23.429l58.857-77.143c2.857-4 8-6.286 13.143-6.857s10.286 1.143 13.714 5.143c1.143 0.571 81.143 77.143 182.286 77.143 56 0 116.571-29.714 116.571-94.286 0-54.857-67.429-81.714-144.571-112.571-102.857-40.571-230.857-92-230.857-235.429 0-105.143 82.286-192 201.714-214.857v-102.857c0-10.286 8.571-18.286 18.286-18.286h77.143c10.286 0 18.286 8 18.286 18.286v100.571c116 13.143 177.714 76 180 78.286 5.714 6.286 6.857 14.857 2.857 21.714l-46.286 83.429c-2.857 5.143-7.429 8.571-13.143 9.143-5.714 1.143-10.857-0.571-15.429-4-0.571-0.571-69.714-61.714-155.429-61.714-72.571 0-122.857 36-122.857 88 0 60.571 69.714 87.429 150.857 118.857 105.143 40.571 224 86.857 224 224.571z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="main-dark-total-revenue">
        <span className="main-dark-last-month">
          <br className=""></br>
          <span className="">Last Month</span>
          <br className=""></br>
        </span>
        <span className="main-dark-last-week">
          <span className="">Last week</span>
          <br className=""></br>
        </span>
        <div className="main-dark-per3">
          <span className="main-dark-per31">
            <br className=""></br>
            <span className="">20.2k</span>
            <br className=""></br>
          </span>
          <svg viewBox="0 0 1024 1024" className="main-dark-icon08">
            <path
              d="M708 366l60 60-256 256-256-256 60-60 196 196z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="main-dark-per2">
          <span className="main-dark-per21">
            <span className="">12.4k</span>
            <br className=""></br>
          </span>
          <svg viewBox="0 0 1024 1024" className="main-dark-icon10">
            <path
              d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="main-dark-per1">
          <svg viewBox="0 0 1024 1024" className="main-dark-icon12">
            <path
              d="M708 366l60 60-256 256-256-256 60-60 196 196z"
              className=""
            ></path>
          </svg>
          <span className="main-dark-per11">
            <br className=""></br>
            <span className="">30.2k</span>
            <br className=""></br>
          </span>
        </div>
        <span className="main-dark-target">
          <br className=""></br>
          <span className="">Target</span>
          <br className=""></br>
        </span>
        <span className="main-dark-totalrevenue">{props.totalrevenue}</span>
        <span className="main-dark-fourtwenty">{props.fourtwenty}</span>
        <span className="main-dark-previous-transaction">
          {props.Previous_transaction}
        </span>
        <span className="main-dark-total-sales">{props.total_sales}</span>
        <svg viewBox="0 0 1024 1024" className="main-dark-icon14">
          <path
            d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 213.333c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 810.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
            className=""
          ></path>
        </svg>
        <div className="main-dark-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="main-dark-image"
          />
        </div>
      </div>
      <div className="main-dark-graph">
        <span className="main-dark-text16">{props.text}</span>
        <div className="main-dark-container1">
          <Chart />
        </div>
      </div>
      <div className="main-dark-container2">
        <div className="main-dark-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '\r\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"\r\n    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\r\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"\r\n    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">\r\n</script>\r\n\r\n\r\n<table class="table table-hover table-bordered table-dark table-striped ">\r\n<thead>\r\n        <tr>\r\n            <th scope="col">No.</th>\r\n            <th scope="col">Product</th>\r\n            <th scope="col">Customer</th>\r\n            <th scope="col">Date</th>\r\n            <th scope="col">Account</th>\r\n            <th scope="col">Payment Method</th>\r\n            <th scope="col">Status</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr>\r\n            <th scope="row">1</th>\r\n            <td>Asus senfone 5</td>\r\n            <td>james Smith</td>\r\n            <td>1 march</td>\r\n            <td>235</td>\r\n            <td>Online</td>\r\n            <td>Pending</td>\r\n            \r\n        </tr>\r\n        <tr>\r\n            <th scope="row">2</th>\r\n            <td>Playstation</td>\r\n            <td>Jacob Thornton</td>\r\n            <td>1 March</td>\r\n            <td>346</td>\r\n            <td>Cash on Delivery</td>\r\n            <td>Complete</td>\r\n        </tr>\r\n        <tr>\r\n            <th scope="row">3</th>\r\n            <td>Iphone 11</td>\r\n            <td>John Thornton</td>\r\n            <td>2 March</td>\r\n            <td>209</td>\r\n            <td>Online</td>\r\n            <td>Complete</td>\r\n            \r\n        </tr>\r\n        <tr>\r\n            <th scope="row">4</th>\r\n            <td>Macbook</td>\r\n            <td>Mark Otto</td>\r\n            <td>2 March</td>\r\n            <td>207</td>\r\n            <td>Online</td>\r\n            <td>Pending</td>\r\n        \r\n        </tr>\r\n        <tr>\r\n            <th scope="row">5</th>\r\n            <td>Hp pavillion</td>\r\n            <td>Jacob Deo</td>\r\n            <td>2 March</td>\r\n            <td>097</td>\r\n            <td>Online</td>\r\n            <td>Pending</td>\r\n        \r\n        </tr>\r\n        <tr>\r\n            <th scope="row">6</th>\r\n            <td>Acer Nitro</td>\r\n            <td>Michael Carol</td>\r\n            <td>3 March</td>\r\n            <td>654</td>\r\n            <td>Cash on Delivery</td>\r\n            <td>Complete</td>\r\n        \r\n        </tr>\r\n        <tr>\r\n            <th scope="row">7</th>\r\n            <td>Razor Blade 3</td>\r\n            <td>Harold Johnson</td>\r\n            <td>3 March</td>\r\n            <td>764</td>\r\n            <td>Cash on Delivery</td>\r\n            <td>Complete</td>\r\n        \r\n        </tr>\r\n        <tr>\r\n            <th scope="row">8</th>\r\n            <td>Jane Frost</td>\r\n            <td>Asus Rog</td>\r\n            <td>4 March</td>\r\n            <td>463</td>\r\n            <td>Online</td>\r\n            <td>Pending</td>\r\n        \r\n        </tr>\r\n    </tbody>\r\n</table>'
            }}
          />
        </div>
        <span className="main-dark-text17">{props.text1}</span>
      </div>
    </div>
  );
};

MainDark.defaultProps = {
  Number: "120",
  Previous_transaction:
    "Previous transactions processing Last payments may note be included",
  total_sales: "Total sales made today",
  fourtwenty: "$420",
  image_alt: "image",
  Client: "Clients",
  Number1: "205",
  totalrevenue: "Total Revenue",
  Active_Workers: "Active workers",
  Active_clients: "Active Clients",
  Earn: "Earnings",
  Employe: "Employees",
  image_src1: "/playground_assets/graph-600w.png",
  image_alt1: "image",
  Number2: "46+",
  Project: "Projects",
  text1: "Latest Transactions",
  Percentage1: "+12.9%",
  rootClassName: "",
  Percentage: "+5.2%",
  Available_projects: "Available projects",
  image_src: "/playground_assets/cr4-removebg-preview-200w.png",
  Percentage3: "+12%",
  text: "Last 6 Months (income)",
  Percentage2: "+14.2%",
  Active_clients1: "View net Earning",
  Number3: "$4.6k"
};

MainDark.propTypes = {
  Number: PropTypes.string,
  Previous_transaction: PropTypes.string,
  total_sales: PropTypes.string,
  fourtwenty: PropTypes.string,
  image_alt: PropTypes.string,
  Client: PropTypes.string,
  Number1: PropTypes.string,
  totalrevenue: PropTypes.string,
  Active_Workers: PropTypes.string,
  Active_clients: PropTypes.string,
  Earn: PropTypes.string,
  Employe: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  Number2: PropTypes.string,
  Project: PropTypes.string,
  text1: PropTypes.string,
  Percentage1: PropTypes.string,
  rootClassName: PropTypes.string,
  Percentage: PropTypes.string,
  Available_projects: PropTypes.string,
  image_src: PropTypes.string,
  Percentage3: PropTypes.string,
  text: PropTypes.string,
  Percentage2: PropTypes.string,
  Active_clients1: PropTypes.string,
  Number3: PropTypes.string
};

export default MainDark;
