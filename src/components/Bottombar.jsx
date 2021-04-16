import React from "react";
import "./styles/Bottombar.css";
import MEC from "../images/MEC.png";
import AS from "../images/AS.png";

class Bottombar extends React.Component {
  render() {
    return (
      <div className="Bottombar__outer">
        <div className="Bottombar__inner">
          <div className="Partner__img__container">
            <img src={AS} className="Partner__img" alt="" />
          </div>
          <div className="Partner__img__container">
            <img src={MEC} className="Partner__img" alt="" />
          </div>
          <div className="Partner__img__container">
            <img src={AS} className="Partner__img" alt="" />
          </div>
        </div>
        <div className="Copy__text__outter">
          <div className="Copy__text__inner">
            <p>Copyright @ 2021</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottombar;
