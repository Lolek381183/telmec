import React from "react";
import Bottombar from "../components/Bottombar";
import Navbar from "../components/Navbar";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./styles/ConsultaNp.css";
import Presencial from "../images/Presencial.png";
import Virtual from "../images/Virtual.png";

class newRegister extends React.Component {
  constructor(props) {
    super();
    this.state = {
      backend: "https://backend.telemec.health",
      form: {
        Numero_identificacion_buscar: "",
      },
    };
  }
  componentDidMount() {
    document.getElementById("Buscar").style.display = "block";
    document.getElementById("Seleccionar").style.display = "none";
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

  lookPatient = (e) => {
    Axios.get(this.state.backend + "/look", {
      params: {
        Numero_identificacion: this.state.form.Numero_identificacion_buscar,
      },
    }).then((response) => {
      if (response.data[0] !== undefined) {
        alert("Paciente encontrado");
        document.getElementById("Buscar").style.display = "none";
        document.getElementById("Seleccionar").style.display = "Block";
        document.getElementById("Todo").style.backgroundColor = "transparent";
      } else {
        alert("Paciente no encontrado");
        document.getElementById("Buscar").style.display = "block";
        document.getElementById("Seleccionar").style.display = "none";
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="Consultanp__outter">
          <div className="Blank__Space"></div>
          <div className="Consultanp__inner" id="Todo">
            <div
              className="Registerform__borrar__actualizar__inner Consultanp__pad"
              id="Buscar"
            >
              <div className="Text__container__title">
                <span>Consulta No Programada</span>
              </div>
              <div className="form-group">
                <label htmlFor="">Número de identificación</label>
                <input
                  className="form-control"
                  type="text"
                  style={{ height: "40px" }}
                  name="Numero_identificacion_buscar"
                  onChange={this.handleChange}
                  id="37"
                />
                <div className="Button__arriba" onClick={this.lookPatient}>
                  <div className="Button__Crear">BUSCAR</div>
                </div>
              </div>
            </div>
            <div id="Seleccionar">
              <div className="Consultanp__seleccionar">
                <div className="Consultanp__seleccionar__item">
                  CONSULTA PRESENCIAL <br />
                  <img
                    src={Presencial}
                    alt=""
                    className="Consultanp__seleccionar__img__1"
                  />
                </div>
                <div></div>
                <Link
                  to={
                    "/roompri/" + this.state.form.Numero_identificacion_buscar
                  }
                >
                  <div className="Consultanp__seleccionar__item">
                    {" "}
                    CONSULTA <br /> VIRTUAL <br />
                    <img
                      src={Virtual}
                      alt=""
                      className="Consultanp__seleccionar__img__2"
                    />
                  </div>
                </Link>
                <div></div>
                <div className="Consultanp__seleccionar__item">
                  {" "}
                  CONSULTA MECMALETA <br />
                  <img
                    src={Virtual}
                    alt=""
                    className="Consultanp__seleccionar__img__2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Blank__Space"></div>
        </div>
        <Bottombar></Bottombar>
      </React.Fragment>
    );
  }
}

export default newRegister;
