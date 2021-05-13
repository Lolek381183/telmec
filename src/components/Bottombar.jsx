import React from "react";

import MEC from "../images/logogris.png";
import Location from "../images/Location_icono.png";
import Email from "../images/Email_icono.png";
import Telefono from "../images/Telefono_icono.png";

import "./styles/Bottombar.css";

class Bottombar extends React.Component {
  render() {
    return (
      <div className="Bottombar__outer" id="Bottombar__outer">
        <div className="Bottombar__inner">
          <div className="Bottombar__img">
            <img src={MEC} className="Partner__img" alt="MEC" />
          </div>
          <div className="Bottombar__contacto__text">
            <div className="Bottombar__contacto__item">
              <div>
                <img
                  src={Location}
                  alt="Location"
                  className="Bottombar__contacto__item__img"
                />
              </div>
              <div className="Bottombar__contacto__item__text">
                Calle 10 # 42-65 oficina 333. Edificio La Plaza del Poblado,
                Medellín.
              </div>
            </div>
            <div className="Bottombar__contacto__item">
              {" "}
              <div>
                <img
                  src={Telefono}
                  alt="Telefono"
                  className="Bottombar__contacto__item__img__1"
                />
              </div>{" "}
              <div className="Bottombar__contacto__item__text__1">
                301 488 1426
              </div>
            </div>
            <div className="Bottombar__contacto__item">
              <div>
                <img
                  src={Email}
                  alt="Email"
                  className="Bottombar__contacto__item__img__2"
                />
              </div>
              <div className="Bottombar__contacto__item__text__2">
                admin@telemec.health{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="Copy__text__outter">
          <p>
            Copyright @2021 All rights reserved | This webapp was desingned by
            MEC .
          </p>
        </div>
      </div>
    );
  }
}

export default Bottombar;
