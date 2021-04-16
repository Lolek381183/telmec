import React from "react";
import Bottombar from "../components/Bottombar";
import Navbar from "../components/Navbar";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import Presencial from "../images/Presencial.png";
import Virtual from "../images/Virtual.png";

class newRegister extends React.Component {
  constructor(props) {
    super();
    this.state = {
      backend: "http://backend.telemec.health",
    };
  }
  componentDidMount() {
    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    })
      .then((response) => {
        if (response) {
        }
      })
      .catch((error) => {
        this.props.history.push("/login");
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="Home__outter">
          <div className="Home">
            <div className="Animation">
              <div className="Home__text_outter">
                <div className="Home__text">
                  <Link
                    to="/presencial"
                    className="text-reset text-decoration-none"
                  >
                    <p className="Welcome__text">CONSULTA PRESENCIAL</p>
                    <img src={Presencial} style={{ width: "100%" }} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div></div>
            <div className="Home__text_outter">
              <div className="Home__text__1">
                <div>
                  <p className="Welcome__text">CONSULTA VIRTUAL</p>
                  <img src={Virtual} style={{ width: "100%" }} alt="" />
                </div>
                <div>
                  <br />
                  <br />
                  <Link to="/room" className="text-reset text-decoration-none">
                    <button className="Login__button">
                      <div className="Login__button__inner">
                        <span>Maleta</span>
                      </div>
                    </button>
                  </Link>
                  <br />
                  <Link to="/room" className="text-reset text-decoration-none">
                    <button className="Login__button">
                      <div className="Login__button__inner">
                        <span>Link</span>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Conclusion__Text">
              Por favor selecciona el tipo de servicio que utilizaras en este
              momento, si te encuentras con un paciente de forma presencial por
              favor selecciona la opción "Consulta presencial", si tu paciente
              se encuentra en casa y se conectará por su smartphone o por una
              mecMaleta selecciona la opción "Consulta virtual".
            </div>
          </div>
        </div>
        <Bottombar></Bottombar>
      </React.Fragment>
    );
  }
}

export default newRegister;
