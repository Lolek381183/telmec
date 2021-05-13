import React from "react";
import "./styles/Navbar.css";
import Logo from "../images/Logo.png";
import Arrow from "../images/arrow.png";
import Menu from "../images/Menu.png";
import Axios from "axios";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      nombre: "",
      Entrance_menu: true,
      Entrance_link: "Portal TeleHealth mec",
      backend: "https://backend.telemec.health",
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

  handleSidebarMenu = (e) => {
    document.getElementById("Navbar__side__menu").style.width = "280px";
  };

  handleSidebarCloseMenu = (e) => {
    document.getElementById("Navbar__side__menu").style.width = "0px";
  };

  showEntranceMenu = (e) => {
    if (this.state.Entrance_menu) {
      document.getElementById(
        "Login__container__service__select__desplegable"
      ).style.display = "block";
      this.setState({
        Entrance_menu: false,
      });
    } else {
      document.getElementById(
        "Login__container__service__select__desplegable"
      ).style.display = "none";
      this.setState({
        Entrance_menu: true,
      });
    }
  };

  entranceSelect = (e) => {
    document.getElementById(
      "Login__container__service__select__desplegable"
    ).style.display = "none";
    this.setState({
      Entrance_link: e,
      Entrance_menu: true,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div id="Navbar__side__menu" className="Navbar__side__menu">
          <div
            onClick={this.handleSidebarCloseMenu}
            className="Navbar__closebtn"
            style={{ cursor: "pointer" }}
          >
            &times;
          </div>

          <Link
            to="/"
            className="text-reset text-decoration-none"
            onClick={this.handleSidebarCloseMenu}
          >
            <div className="Logo__image__container">
              <img className="Logo__image" src={Logo} alt="Logo" />
            </div>
            <div className="Blank__space__vertical"></div>
            <div className="Line__height"> Inicio</div>
          </Link>

          <Link
            to="/Tienda"
            className="text-reset text-decoration-none"
            onClick={this.handleSidebarCloseMenu}
          >
            <div className="Logo__image__container">
              <img className="Logo__image" src={Logo} alt="Logo" />
            </div>
            <div className="Blank__space__vertical"></div>
            <div className="Line__height"> Demo</div>
          </Link>

          <Link
            to="/PyS"
            className="text-reset text-decoration-none"
            onClick={this.handleSidebarCloseMenu}
          >
            <div className="Logo__image__container">
              <img className="Logo__image" src={Logo} alt="Logo" />
            </div>
            <div className="Blank__space__vertical"></div>
            <div className="Line__height"> Productos y Servicios</div>
          </Link>
        </div>
        <div className="Menubar__outer">
          <div className="MenuBar__inner">
            <div className="MenuBar__logo__title">
              <Link
                to="/"
                className="Logo__container text-reset text-decoration-none"
              >
                <div className="Logo__image__container">
                  <img className="Logo__image" src={Logo} alt="Logo" />
                </div>
                &nbsp;
                <div className="Logo__Title">
                  <span>TeleHealth</span>
                </div>
              </Link>
            </div>

            {this.state.login ? (
              <div className="Pages__container">
                <Link to="/" className=" text-reset text-decoration-none">
                  <div className="Link__container">
                    <span>Inicio</span>
                  </div>
                </Link>
                <Link to="/PyS" className=" text-reset text-decoration-none">
                  <div className="Link__container">
                    <span>Demo</span>
                  </div>
                </Link>
                <Link to="/PyS" className=" text-reset text-decoration-none">
                  <div className="Link__container">
                    <span>Productos y Servicios</span>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="Pages__container">
                <Link
                  to="/pacientes"
                  className=" text-reset text-decoration-none"
                >
                  <div className="Link__container">
                    <span>Pacientes</span>
                  </div>
                </Link>
                <Link
                  to="/consultaNP"
                  className=" text-reset text-decoration-none"
                >
                  <div className="Link__container">
                    <span>Consulta NP</span>
                  </div>
                </Link>
              </div>
            )}

            <div className="Login__container">
              <div className="Login__container__service__select">
                <div
                  className="Login__container__service__selected"
                  onClick={this.showEntranceMenu}
                >
                  {this.state.Entrance_link}
                </div>
                <div className="Login__container__service__selector">
                  <img
                    src={Arrow}
                    alt="arrow"
                    className="Login__container__service__selector__arrow"
                  />
                </div>
                <Link
                  to="/login"
                  className="MenuButton__text text-reset text-decoration-none"
                >
                  <div className="Login__container__service__selected__button">
                    {this.state.login ? "Entrar" : "Salir"}
                  </div>
                </Link>
                <div
                  className="Login__container__service__select__desplegable"
                  id="Login__container__service__select__desplegable"
                >
                  <div
                    className="Login__container__service__select__desplegable__item"
                    onClick={() => this.entranceSelect("Portal TeleHealth mec")}
                  >
                    Portal TeleHealth mec
                  </div>
                  <div
                    className="Login__container__service__select__desplegable__item"
                    onClick={() => this.entranceSelect("Portal Manilla mec")}
                  >
                    Portal Manilla mec
                  </div>
                  <div
                    className="Login__container__service__select__desplegable__item"
                    onClick={() =>
                      this.entranceSelect("Portal EH TeleHealth mec")
                    }
                  >
                    Portal EH TeleHealth mec
                  </div>
                </div>
              </div>
            </div>

            <div
              className="Navbar__Menu__Menu__Phone"
              onClick={this.handleSidebarMenu}
              style={{ cursor: "pointer" }}
            >
              <img src={Menu} alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
