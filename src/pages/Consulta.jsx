import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./styles/Consulta.css";
import Presencial from "../images/Presencial.png";
import Virtual from "../images/Virtual.png";
import Maleta from "../images/Maleta.png";

class Consulta extends React.Component {
  constructor(props) {
    super();
    this.state = {
      backend: "http://localhost:3001",
      form: {
        Numero_identificacion_buscar: "",
        Maleta: "",
      },
    };
    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    }).then((response) => {
      if (response.data.error) {
        this.props.history.push("/login");
      }
    });
  }
  componentDidMount() {
    document.getElementById("Buscar").style.display = "block";
    document.getElementById("Seleccionar").style.display = "none";
    document.getElementById("Seleccionar_Maleta").style.display = "none";
  }

  lookPatient = (e) => {
    Axios.get(this.state.backend + "/look", {
      withCredentials: true,
      params: {
        Numero_identificacion: this.state.form.Numero_identificacion_buscar,
      },
    }).then((response) => {
      console.log(response);
      if (response.data[0] !== undefined) {
        alert("Paciente encontrado");
        document.getElementById("Buscar").style.display = "none";
        document.getElementById("Seleccionar").style.display = "Block";
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

  seleccionarMaleta = () => {
    document.getElementById("Buscar").style.display = "none";
    document.getElementById("Seleccionar").style.display = "none";
    document.getElementById("Seleccionar_Maleta").style.display = "block";
  };

  render() {
    return (
      <React.Fragment>
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
                <Link
                  to={
                    "/presencial/" +
                    this.state.form.Numero_identificacion_buscar
                  }
                  className="text-reset text-decoration-none"
                >
                  <div className="Consultanp__seleccionar__item">
                    CONSULTA PRESENCIAL <br />
                    <img
                      src={Presencial}
                      alt=""
                      className="Consultanp__seleccionar__img__1"
                    />
                  </div>
                </Link>
                <div></div>
                <Link
                  to={
                    "/roompri/" + this.state.form.Numero_identificacion_buscar
                  }
                  className=" text-reset text-decoration-none"
                >
                  <div className="Consultanp__seleccionar__item">
                    {" "}
                    <span>
                      CONSULTA <br /> VIRTUAL <br />
                    </span>
                    <img
                      src={Virtual}
                      alt=""
                      className="Consultanp__seleccionar__img__2"
                    />
                  </div>
                </Link>

                <div></div>
                <div onClick={this.seleccionarMaleta}>
                  <div className="Consultanp__seleccionar__item">
                    {" "}
                    CONSULTA TELESENSORICA <br />
                    <img
                      src={Maleta}
                      alt=""
                      className="Consultanp__seleccionar__img__2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="Registerform__borrar__actualizar__inner Consultanp__pad"
              id="Seleccionar_Maleta"
            >
              <div className="Text__container__title">
                <span>Maleta Telesensorica</span>
              </div>
              <div className="form-group">
                <label htmlFor="">
                  Seleccione la maleta que tiene su paciente
                </label>
                <select
                  className="form-control"
                  name="Maleta"
                  onChange={(value) => {
                    this.handleChange(value);
                  }}
                  id="5"
                >
                  <option value="Seleccionar">Seleccionar</option>
                  <option value="maleta_1">Maleta 1</option>
                  <option value="maleta_2">Maleta 2</option>
                  <option value="maleta_3">Maleta 3</option>
                  <option value="maleta_4">Maleta 4</option>
                </select>
                <Link
                  to={
                    "/roomprisen/" +
                    this.state.form.Numero_identificacion_buscar +
                    "/" +
                    this.state.form.Maleta
                  }
                  className=" text-reset text-decoration-none"
                >
                  <div className="Button__arriba">
                    <div className="Button__Crear">ENTRAR</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="Blank__Space"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Consulta;
