import React from "react";
import Axios from "axios";
import "./styles/RegisterForm.css";

class RegisterForm extends React.Component {
  state = {
    counter: 0,
    Paciente_encontrado: "",
    backend: "https://backend.telemec.health",
    form: {
      Primer_nombre: "",
      Segundo_nombre: "",
      Primer_apellido: "",
      Segundo_apellido: "",
      Tipo_identificacion: "",
      Numero_identificacion: "",
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
      Detalles_ocupacion: "",
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
      Numero_identificacion_responsable: "",
      Telefono_responsable: "",
      Parentezco_responsable: "",
      Fecha_nacimiento_responsable: "",
      Email_responsable: "",
      Religion: "",
      Tipo_sangre: "",
      Observaciones: "",
      Numero_identificacion_buscar: "",
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
        document.getElementById("dot1").style.backgroundColor = "gray";
        document.getElementById("dot2").style.backgroundColor = "white";
        document.getElementById("dot3").style.backgroundColor = "white";

        this.setState({
          counter: 0,
        });
        break;
      case 1:
        document.getElementById("Demo_1").style.display = "none";
        document.getElementById("Demo_2").style.display = "block";
        document.getElementById("Clinical").style.display = "none";
        document.getElementById("dot1").style.backgroundColor = "white";
        document.getElementById("dot2").style.backgroundColor = "gray";
        document.getElementById("dot3").style.backgroundColor = "white";

        this.setState({
          counter: 1,
        });
        break;
      case 2:
        document.getElementById("Demo_1").style.display = "none";
        document.getElementById("Demo_2").style.display = "none";
        document.getElementById("Clinical").style.display = "block";
        document.getElementById("dot1").style.backgroundColor = "white";
        document.getElementById("dot2").style.backgroundColor = "white";
        document.getElementById("dot3").style.backgroundColor = "gray";

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

  addPatient = (e) => {
    Axios.post(this.state.backend + "/create", {
      Primer_nombre: this.state.form.Primer_nombre,
      Segundo_nombre: this.state.form.Segundo_nombre,
      Primer_apellido: this.state.form.Primer_apellido,
      Segundo_apellido: this.state.form.Segundo_apellido,
      Tipo_identificacion: this.state.form.Tipo_identificacion,
      Numero_identificacion: this.state.form.Numero_identificacion,
      Estado_paciente: this.state.form.Estado_paciente,
      Pais_origen: this.state.form.Pais_origen,
      Estado_civil: this.state.form.Estado_civil,
      Sexo: this.state.form.Sexo,
      Fecha_nacimiento: this.state.form.Fecha_nacimiento,
      Edad: this.state.form.Edad,
      Lugar_nacimiento: this.state.form.Lugar_nacimiento,
      Escolaridad: this.state.form.Escolaridad,
      Ocupacion: this.state.form.Ocupacion,
      Pais: this.state.form.Pais,
      Detalles_ocupacion: this.state.form.Detalles_ocupacion,
      Barrio: this.state.form.Barrio,
      Zona_residencial: this.state.form.Zona_residencial,
      Direccion_residencial: this.state.form.Direccion_residencial,
      Telefono: this.state.form.Telefono,
      Celular: this.state.form.Celular,
      Email: this.state.form.Email,
      Entidad: this.state.form.Entidad,
      Tipo_aseguramiento: this.state.form.Tipo_aseguramiento,
      Nombre_responsable: this.state.form.Nombre_responsable,
      Apellido_responsable: this.state.form.Apellido_responsable,
      Tipo_identificacion_responsable: this.state.form
        .Tipo_identificacion_responsable,
      Numero_identificacion_responsable: this.state.form
        .Numero_identificacion_responsable,
      Telefono_responsable: this.state.form.Telefono_responsable,
      Parentezco_responsable: this.state.form.Parentezco_responsable,
      Fecha_nacimiento_responsable: this.state.form
        .Fecha_nacimiento_responsable,
      Email_responsable: this.state.form.Email_responsable,
      Religion: this.state.form.Religion,
      Tipo_sangre: this.state.form.Tipo_sangre,
      Observaciones: this.state.form.Observaciones,
    }).then((response) => {
      alert("Paciente Creado");
      console.log(response);
    });
  };

  lookPatient = (e) => {
    Axios.get(this.state.backend + "/look", {
      params: {
        Numero_identificacion: this.state.form.Numero_identificacion_buscar,
      },
    }).then((response) => {
      if (response.data[0] !== undefined) {
        this.setState({
          form: {
            Primer_nombre: response.data[0].primer_nombre,
            Segundo_nombre: response.data[0].segundo_nombre,
            Primer_apellido: response.data[0].primer_apellido,
            Segundo_apellido: response.data[0].segundo_apellido,
            Tipo_identificacion: response.data[0].tipo_identificacion,
            Numero_identificacion: response.data[0].numero_identificacion,
            Estado_paciente: response.data[0].estado_paciente,
            Pais_origen: response.data[0].pais_origen,
            Estado_civil: response.data[0].estado_civil,
            Sexo: response.data[0].sexo,
            Fecha_nacimiento: response.data[0].fecha_nacimiento,
            Edad: response.data[0].edad,
            Lugar_nacimiento: response.data[0].lugar_nacimiento,
            Escolaridad: response.data[0].escolaridad,
            Ocupacion: response.data[0].ocupacion,
            Pais: response.data[0].pais,
            Detalles_ocupacion: response.data[0].detalles_ocupacion,
            Barrio: response.data[0].barrio,
            Zona_residencial: response.data[0].zona_residencial,
            Direccion_residencial: response.data[0].direccion_residencial,
            Telefono: response.data[0].telefono,
            Celular: response.data[0].celular,
            Email: response.data[0].email,
            Entidad: response.data[0].entidad,
            Tipo_aseguramiento: response.data[0].tipo_aseguramiento,
            Nombre_responsable: response.data[0].nombre_responsable,
            Apellido_responsable: response.data[0].apellido_responsable,
            Tipo_identificacion_responsable:
              response.data[0].tipo_identificacion_responsable,
            Numero_identificacion_responsable:
              response.data[0].numero_identificacion_responsable,
            Telefono_responsable: response.data[0].telefono_responsable,
            Parentezco_responsable: response.data[0].parentezco_responsable,
            Fecha_nacimiento_responsable:
              response.data[0].fecha_nacimiento_responsable,
            Email_responsable: response.data[0].email_responsable,
            Religion: response.data[0].religion,
            Tipo_sangre: response.data[0].tipo_sangre,
            Observaciones: response.data[0].observaciones,
            Numero_identificacion_buscar:
              response.data[0].numero_identificacion,
          },
        });
        alert("Paciente encontrado");
      } else {
        alert("Paciente no encontrado");
      }
    });
  };

  deletePatient = (e) => {
    console.log(this.state.form.Numero_identificacion_buscar);
    if (this.state.form.Numero_identificacion_buscar !== "") {
      Axios.delete(
        this.state.backend +
          `/delete/${this.state.form.Numero_identificacion_buscar}`
      ).then((response) => {
        alert("Paciente Eliminado");
      });
    }
  };

  updatePatient = (e) => {
    Axios.put(this.state.backend + "/update", {
      Primer_nombre: this.state.form.Primer_nombre,
      Segundo_nombre: this.state.form.Segundo_nombre,
      Primer_apellido: this.state.form.Primer_apellido,
      Segundo_apellido: this.state.form.Segundo_apellido,
      Tipo_identificacion: this.state.form.Tipo_identificacion,
      Numero_identificacion: this.state.form.Numero_identificacion,
      Estado_paciente: this.state.form.Estado_paciente,
      Pais_origen: this.state.form.Pais_origen,
      Estado_civil: this.state.form.Estado_civil,
      Sexo: this.state.form.Sexo,
      Fecha_nacimiento: this.state.form.Fecha_nacimiento,
      Edad: this.state.form.Edad,
      Lugar_nacimiento: this.state.form.Lugar_nacimiento,
      Escolaridad: this.state.form.Escolaridad,
      Ocupacion: this.state.form.Ocupacion,
      Pais: this.state.form.Pais,
      Detalles_ocupacion: this.state.form.Detalles_ocupacion,
      Barrio: this.state.form.Barrio,
      Zona_residencial: this.state.form.Zona_residencial,
      Direccion_residencial: this.state.form.Direccion_residencial,
      Telefono: this.state.form.Telefono,
      Celular: this.state.form.Celular,
      Email: this.state.form.Email,
      Entidad: this.state.form.Entidad,
      Tipo_aseguramiento: this.state.form.Tipo_aseguramiento,
      Nombre_responsable: this.state.form.Nombre_responsable,
      Apellido_responsable: this.state.form.Apellido_responsable,
      Tipo_identificacion_responsable: this.state.form
        .Tipo_identificacion_responsable,
      Numero_identificacion_responsable: this.state.form
        .Numero_identificacion_responsable,
      Telefono_responsable: this.state.form.Telefono_responsable,
      Parentezco_responsable: this.state.form.Parentezco_responsable,
      Fecha_nacimiento_responsable: this.state.form
        .Fecha_nacimiento_responsable,
      Email_responsable: this.state.form.Email_responsable,
      Religion: this.state.form.Religion,
      Tipo_sangre: this.state.form.Tipo_sangre,
      Observaciones: this.state.form.Observaciones,
    }).then((response) => {
      alert("Producto actualizado");
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="registerform__outter__outter">
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="1"
                      value={this.state.form.Primer_nombre}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Segundo Nombre</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Segundo_nombre"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="2"
                      value={this.state.form.Segundo_nombre}
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="3"
                      value={this.state.form.Primer_apellido}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Segundo Apellido</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Segundo_apellido"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="4"
                      value={this.state.form.Segundo_apellido}
                    />
                  </div>
                </div>

                <div className="two__rows">
                  <div className="form-group">
                    <label htmlFor="">Tipo de identificación</label>
                    <br />
                    <select
                      className="form-control"
                      name="Tipo_identificacion"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="5"
                      value={this.state.form.Tipo_identificacion}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Cedula de ciudadanía">
                        Cedula de ciudadanía
                      </option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="Carnet medico">Carnet medico</option>
                      <option value="Carnet">Carnet</option>
                    </select>
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Numero de identificacion</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Numero_identificacion"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="6"
                      value={this.state.form.Numero_identificacion}
                    />
                  </div>
                </div>
                <div className="two__rows">
                  <div className="form-group">
                    <label htmlFor="">Estado Paciente</label>
                    <br />
                    <select
                      className="form-control"
                      name="Estado_paciente"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="7"
                      value={this.state.form.Estado_paciente}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Pais de origen</label>
                    <br />
                    <select
                      className="form-control"
                      name="Pais_origen"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="8"
                      value={this.state.form.Pais_origen}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Venezuela">Venezuela</option>
                    </select>
                  </div>
                </div>
                <div className="two__rows">
                  <div className="form-group">
                    <label htmlFor="">Estado Civil</label>
                    <br />
                    <select
                      className="form-control"
                      name="Estado_civil"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="9"
                      value={this.state.form.Estado_civil}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Soltero">Soltero</option>
                      <option value="Casado">Casado</option>
                    </select>
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Sexo</label>
                    <br />
                    <select
                      className="form-control"
                      name="Sexo"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="10"
                      value={this.state.form.Sexo}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="11"
                      value={this.state.form.Fecha_nacimiento}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Edad</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Edad"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="12"
                      value={this.state.form.Edad}
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="13"
                      value={this.state.form.Lugar_nacimiento}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Escolaridad</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Escolaridad"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="14"
                      value={this.state.form.Escolaridad}
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="15"
                      value={this.state.form.Ocupacion}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Pais</label>
                    <br />
                    <select
                      name="Pais"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="16"
                      value={this.state.form.Pais}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Venezuela">Venezuela</option>
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
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form.Detalles_ocupacion}
                  />
                </div>
                <div className="two__rows">
                  <div className="form-group">
                    <label htmlFor="">Barrio</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Barrio"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="18"
                      value={this.state.form.Barrio}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Zona Recidencial</label>
                    <br />
                    <select
                      name="Zona_residencial"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="19"
                      value={this.state.form.Zona_residencial}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Urbana">Urbana</option>
                      <option value="Rural">Rural</option>
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
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="20"
                    value={this.state.form.Direccion_residencial}
                  />
                </div>
                <div className="two__rows">
                  <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Telefono"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="21"
                      value={this.state.form.Telefono}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Celular</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Celular"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="22"
                      value={this.state.form.Celular}
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
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="23"
                    value={this.state.form.Email}
                  />
                </div>
                <div className="two__rows">
                  <div className="form-group">
                    <label htmlFor="">Entidad</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Entidad"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="24"
                      value={this.state.form.Entidad}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Tipo de aseguramiento</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Tipo_aseguramiento"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="25"
                      value={this.state.form.Tipo_aseguramiento}
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="26"
                      value={this.state.form.Nombre_responsable}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Apellido_responsable"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="27"
                      value={this.state.form.Apellido_responsable}
                    />
                  </div>
                </div>
                <div className="two__rows">
                  <div className="form-group">
                    <label htmlFor="">Tipo de identificación</label>
                    <br />
                    <select
                      name="Tipo_identificacion_responsable"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="28"
                      value={this.state.form.Tipo_identificacion_responsable}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Cedula de ciudadanía">
                        Cedula de ciudadanía
                      </option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="Carnet medico">Carnet medico</option>
                      <option value="Carnet">Carnet</option>
                    </select>
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Numero de identificacion</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Numero_identificacion_responsable"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="29"
                      value={this.state.form.Numero_identificacion_responsable}
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="30"
                      value={this.state.form.Telefono_responsable}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Parentezco</label>
                    <br />
                    <select
                      name="Parentezco_responsable"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="31"
                      value={this.state.form.Parentezco_responsable}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Madre">Madre</option>
                      <option value="Padre">Padre</option>
                      <option value="Hijo">Hijo</option>
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="32"
                      value={this.state.form.Fecha_nacimiento_responsable}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Email responsable</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Email_responsable"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="33"
                      value={this.state.form.Email_responsable}
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
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="34"
                      value={this.state.form.Religion}
                    />
                  </div>
                  <div></div>
                  <div className="form-group">
                    <label htmlFor="">Tipo de sangre</label>
                    <br />
                    <select
                      name="Tipo_sangre"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="35"
                      value={this.state.form.Tipo_sangre}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>
                <div className="Button__obver">
                  <div className="form-group">
                    <label htmlFor="">Observaciones</label>
                    <textarea
                      className="form-control large"
                      type="text"
                      name="Observaciones"
                      onChange={(value) => {
                        this.handleChange(value);
                      }}
                      id="36"
                      value={this.state.form.Observaciones}
                    />
                  </div>
                  <div></div>
                  <div className="Button__arriba" onClick={this.addPatient}>
                    <div className="Button__Crear">AGREGAR</div>
                  </div>
                </div>
              </form>
            </div>
            <div className="passControl">
              <div onClick={this.handlePrevious}>
                <span className="arrow link">&#xab;</span>
              </div>
              <div
                onClick={(e) => this.setComponent(0)}
                className="dot"
                id="dot1"
              ></div>
              <div
                onClick={(e) => this.setComponent(1)}
                className="dot"
                id="dot2"
              ></div>
              <div
                onClick={(e) => this.setComponent(2)}
                className="dot"
                id="dot3"
              ></div>
              <div onClick={this.handleNext}>
                <span className="arrow">&#xbb;</span>
              </div>
            </div>
          </div>
          <div></div>
          <div className="Registerform__borrar__actualizar">
            <div className="Registerform__borrar__actualizar__inner">
              <div className="Text__container__title">
                <span>Encuentra Pacientes</span>
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
                <div className="Button__arriba" onClick={this.updatePatient}>
                  <div className="Button__Crear">ACTUALIZAR</div>
                </div>
                <div className="Button__arriba" onClick={this.deletePatient}>
                  <div className="Button__Crear">BORRAR</div>
                </div>
              </div>
            </div>
            <div className="Registerform__borrar__actualizar__inner">
              <div className="Text__container__title">
                <span>Agendar una cita</span>
              </div>
              <div className="form-group">
                <label htmlFor="">Fecha</label>
                <input
                  className="form-control"
                  type="date"
                  style={{ height: "40px" }}
                  name="Numero_identificacion_buscar"
                  onChange={this.handleChange}
                  id="6"
                />
                <label htmlFor="">Hora</label>
                <input
                  className="form-control"
                  type="hour"
                  style={{ height: "40px" }}
                  name="Numero_identificacion_buscar"
                  onChange={this.handleChange}
                  id="6"
                />

                <div className="Button__arriba" onClick={this.lookPatient}>
                  <div className="Button__Crear">AGENDAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
