import React from "react";
import "./styles/RegisterForm.css";

class RegisterForm extends React.Component {
  state = {
    counter: 0,
    form: {
      Primer_nombre: "",
      Segundo_nombre: "",
      Primer_apellido: "",
      Segundo_apellido: "",
      Tipo_identificacion: "",
      Numero_identificación: "",
      Estado_paciente: "",
      Pais_origen: "",
      Estado_civil: "",
      Sexo: "",
      Fecha_nacimiento: "",
      Edad: "",
      Lugar_nacimiento: "",
      Escolaridad: "",
      Ocupacion: "",
      Pais: "",
      Detalles_ocupación: "",
      Barrio: "",
      Zona_residencial: "",
      Direccion_residencial: "",
      Telefono: "",
      Celular: "",
      Email: "",
      Entidad: "",
      Tipo_aseguramiento: "",
      Nombre_responsable: "",
      Apellido_responsable: "",
      Tipo_identificacion_responsable: "",
      Numero_identificación_responsable: "",
      Telefono_responsable: "",
      Parentezco_responsable: "",
      Fecha_nacimiento_responsable: "",
      Email_responsable: "",
      Religión: "",
      Tipo_sangre: "",
      Observaciones: "",
    },
  };
  componentDidMount() {
    this.setComponent(0);
    this.setState({
      counter: 0,
    });
  }

  handleNext = (e) => {
    if (this.state.counter < 3) {
      this.setComponent(this.state.counter + 1);
    }
  };

  handlePrevious = (e) => {
    if (this.state.counter > 0) {
      this.setComponent(this.state.counter - 1);
    }
  };

  setComponent(fomrNumber) {
    switch (fomrNumber) {
      case 0:
        document.getElementById("Demo_1").style.display = "block";
        document.getElementById("Demo_2").style.display = "none";
        document.getElementById("Clinical").style.display = "none";

        this.setState({
          counter: 0,
        });
        break;
      case 1:
        document.getElementById("Demo_1").style.display = "none";
        document.getElementById("Demo_2").style.display = "block";
        document.getElementById("Clinical").style.display = "none";

        this.setState({
          counter: 1,
        });
        break;
      case 2:
        document.getElementById("Demo_1").style.display = "none";
        document.getElementById("Demo_2").style.display = "none";
        document.getElementById("Clinical").style.display = "block";

        this.setState({
          counter: 2,
        });
        break;

      default:
        console.log("Upps");
        break;
    }
  }

  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <div className="registerform__outter">
        <div className="registerform__inner">
          <form id="Demo_1" action="">
            <div className="Text__container__title">
              <span>Información del paciente</span>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Primer Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="Primer_nombre"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Segundo Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="Segundo_nombre"
                  onChange={this.handleChange}
                  id="2"
                />
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Primer Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  name="Primer_apellido"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Segundo Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  name="Segundo_apellido"
                  onChange={this.handleChange}
                  id="2"
                />
              </div>
            </div>

            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Tipo de identificación</label>
                <br />
                <select
                  name="Tipo_identificacion"
                  onChange={this.handleChange}
                  id="tipo_id"
                >
                  <option value="volvo">Cedula de ciudadanía</option>
                  <option value="saab">Pasaporte</option>
                  <option value="opel">Carnet medico</option>
                  <option value="audi">Carnet </option>
                </select>
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Numero de identificacion</label>
                <input
                  className="form-control"
                  type="text"
                  name="Numero_identificación"
                  onChange={this.handleChange}
                  id="5"
                />
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Estado Paciente</label>
                <br />
                <select
                  name="Estado_paciente"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Activo</option>
                  <option value="saab">Inactivo</option>
                </select>
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Pais de origen</label>
                <br />
                <select
                  name="Pais_origen"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Colombia</option>
                  <option value="saab">Venezuela</option>
                </select>
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Estado Civil</label>
                <br />
                <select
                  name="Estado_civil"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Soltero</option>
                  <option value="saab">Casado</option>
                </select>
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Sexo</label>
                <br />
                <select
                  name="Sexo"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Masculino</option>
                  <option value="saab">Femenino</option>
                </select>
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Fecha de nacimiento</label>
                <input
                  className="form-control"
                  type="text"
                  name="Fecha_nacimiento"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Edad</label>
                <input
                  className="form-control"
                  type="text"
                  name="Edad"
                  onChange={this.handleChange}
                  id="2"
                />
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Lugar de nacimiento</label>
                <input
                  className="form-control"
                  type="text"
                  name="Lugar_nacimiento"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Escolaridad</label>
                <input
                  className="form-control"
                  type="text"
                  name="Escolaridad"
                  onChange={this.handleChange}
                  id="2"
                />
              </div>
            </div>
          </form>
          <form id="Demo_2" action="">
            <div className="Text__container__title">
              <span>Información del paciente</span>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Ocupación</label>
                <input
                  className="form-control"
                  type="text"
                  name="Ocupacion"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Pais</label>
                <br />
                <select
                  name="Pais"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Colombia</option>
                  <option value="saab">Venezuela</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Detalles de ocupación</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Detalles_ocupacion"
                onChange={this.handleChange}
                id="6"
              />
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Barrio</label>
                <input
                  className="form-control"
                  type="text"
                  name="Barrio"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Zona Recidencial</label>
                <br />
                <select
                  name="Zona_residencial"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Urbana</option>
                  <option value="saab">Rural</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Dirección Residencial</label>
              <textarea
                className="form-control large"
                type="text"
                style={{ height: "40px" }}
                name="Direccion_residencial"
                onChange={this.handleChange}
                id="6"
              />
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Telefono</label>
                <input
                  className="form-control"
                  type="text"
                  name="Telefono"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Celular</label>
                <input
                  className="form-control"
                  type="text"
                  name="Celular"
                  onChange={this.handleChange}
                  id="2"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <textarea
                className="form-control"
                style={{ height: "40px" }}
                type="text"
                name="Email"
                onChange={this.handleChange}
                id="6"
              />
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Entidad</label>
                <input
                  className="form-control"
                  type="text"
                  name="Entidad"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Tipo de aseguramiento</label>
                <input
                  className="form-control"
                  type="text"
                  name="Tipo_aseguramiento"
                  onChange={this.handleChange}
                  id="2"
                />
              </div>
            </div>
          </form>
          <form id="Clinical" action="">
            <div className="Text__container__title">
              <span>Responsable</span>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="Nombre_responsable"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  name="Apellido_responsable"
                  onChange={this.handleChange}
                  id="2"
                />
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Tipo de identificación</label>
                <br />
                <select
                  name="Tipo_identificacion_responsable"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Cedula de ciudadanía</option>
                  <option value="saab">Pasaporte</option>
                  <option value="opel">Carnet medico</option>
                  <option value="audi">Carnet </option>
                </select>
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Numero de identificacion</label>
                <input
                  className="form-control"
                  type="text"
                  name="Numero_identificacion_responsable"
                  onChange={this.handleChange}
                  id="5"
                />
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Telefono</label>
                <input
                  className="form-control"
                  type="text"
                  name="Telefono_responsable"
                  onChange={this.handleChange}
                  id="1"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Parentezco</label>
                <br />
                <select
                  name="Parentezco"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">Madre</option>
                  <option value="saab">Padre</option>
                  <option value="saab">Hijo</option>
                </select>
              </div>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Fecha de nacimiento</label>
                <input
                  className="form-control"
                  type="text"
                  name="Fecha_nacimiento_responsable"
                  onChange={this.handleChange}
                  id="18"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Email responsable</label>
                <input
                  className="form-control"
                  type="text"
                  name="Email_responsable"
                  onChange={this.handleChange}
                  id="19"
                />
              </div>
            </div>
            <div className="Text__container__title">
              <span>Información adicional</span>
            </div>
            <div className="two__rows">
              <div className="form-group">
                <label htmlFor="">Religión</label>
                <input
                  className="form-control"
                  type="text"
                  name="Religion"
                  onChange={this.handleChange}
                  id="20"
                />
              </div>
              <div></div>
              <div className="form-group">
                <label htmlFor="">Tipo de sangre</label>
                <br />
                <select
                  name="Tipo_sangre"
                  onChange={this.handleChange}
                  id="cars"
                  form="carform"
                >
                  <option value="volvo">O+</option>
                  <option value="saab">O-</option>
                  <option value="volvo">A+</option>
                  <option value="saab">A-</option>
                  <option value="volvo">B+</option>
                  <option value="saab">B-</option>
                  <option value="volvo">AB+</option>
                  <option value="saab">AB-</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Observaciones</label>
              <textarea
                className="form-control large"
                type="text"
                name="Observaciones"
                onChange={this.handleChange}
                id="6"
              />
            </div>
          </form>
        </div>
        <div className="passControl">
          <div onClick={this.handlePrevious}>
            <span className="arrow link">&#xab;</span>
          </div>
          <div onClick={(e) => this.setComponent(0)} className="dot"></div>
          <div onClick={(e) => this.setComponent(1)} className="dot"></div>
          <div onClick={(e) => this.setComponent(2)} className="dot"></div>
          <div onClick={this.handleNext}>
            <span className="arrow">&#xbb;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
