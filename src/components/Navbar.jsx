import React from "react";
import "./styles/Navbar.css";
import Logo from "../images/Logo.png";
import User_incon from "../images/User_icon.png";
import Axios from "axios";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      nombre: "",
      backend: "http://backend.telemec.health",
    };
  }

  componentDidMount() {
    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    }).then((response) => {
      console.log(response);
      if (response.data.auth) {
        this.setState({
          login: false,
          nombre: response.data.nombre,
        });
      }
    });
  }
  render() {
    return (
      <div className="Menubar__outer">
        <div className="MenuBar__inner">
          <Link
            to="/"
            className="Logo__container text-reset text-decoration-none"
          >
            <div className="Logo__image__container">
              <img className="Logo__image" src={Logo} alt="Logo" />
            </div>
            <div className="Logo__Title">
              <span>Telemec</span>
            </div>
          </Link>
          <div className="Pages__container">
            {this.state.login ? (
              ""
            ) : (
              <Link
                to="/newuser"
                className="MenuButton__text text-reset text-decoration-none"
              >
                <div className="illness__container">
                  <span className="MenuButton__text">Nuevo Usuario</span>
                </div>
              </Link>
            )}

            {this.state.login ? (
              ""
            ) : (
              <Link
                to="/login"
                className="MenuButton__text text-reset text-decoration-none"
              >
                <div className="Data__container">
                  <span className="MenuButton__text">Registros</span>
                </div>
              </Link>
            )}
          </div>
          <div className="Login__container__1">
            <div className="Login__text__container">
              <Link
                to="/login"
                className="MenuButton__text text-reset text-decoration-none"
              >
                {" "}
                <img className="User_icon" src={User_incon} alt="" />
                &nbsp;
                {this.state.login ? "Log in" : "Log out"}
                &nbsp;
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
