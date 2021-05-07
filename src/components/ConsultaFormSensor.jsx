import React from "react";
import Axios from "axios";
import "./styles/RegisterForm.css";
import io from "socket.io-client";
let socket;

class ConsultaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      Paciente_encontrado: "",
      backend: "https://backend.telemec.health",
      Numero_identificacion: this.props.Numero_identificacion,
      roomName: this.props.roomName,
      messageList: [],
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
        pin: "",
      },
      form1: {
        Motivo_consulta: "",
        Enfermedad_actual: "",
        Revision_sistemas: "",
        Antecedentes_personales: "",
        Examen_fisico: "",
        Ayudas_diagnosticas: "",
        Diagnostico: "",
        Analisis: "",
        Conducta: "",
        Observaciones: "",
      },
    };
    this.lookPatient();
  }
  componentDidMount() {
    this.setComponent(0);
    this.setState({
      counter: 0,
    });
    socket = io(this.state.backend);
    socket.emit("join_room", this.state.roomName);
    socket.on("receive_message", (data) => {
      if (String(data.message).substring(0, 18) === "Temperatura_Tomada") {
        alert(data.message);
      }
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
        document.getElementById("dot1").style.backgroundColor = "white";
        document.getElementById("dot2").style.backgroundColor =
          "rgba(255, 255, 255, 0.2)";

        this.setState({
          counter: 0,
        });
        break;
      case 1:
        document.getElementById("Demo_1").style.display = "none";
        document.getElementById("Demo_2").style.display = "block";
        document.getElementById("dot1").style.backgroundColor =
          "rgba(255, 255, 255, 0.2)";
        document.getElementById("dot2").style.backgroundColor = "white";

        this.setState({
          counter: 1,
        });
        break;
      case 2:
        document.getElementById("Demo_1").style.display = "none";
        document.getElementById("Demo_2").style.display = "none";
        document.getElementById("dot1").style.backgroundColor =
          "rgba(255, 255, 255, 0.2)";
        document.getElementById("dot2").style.backgroundColor =
          "rgba(255, 255, 255, 0.2)";

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
      form1: { ...this.state.form1, [e.target.name]: e.target.value },
    });
  };

  addHistory = (e) => {
    console.log(this.state.form1);
    Axios.post(this.state.backend + "/createhistory", {
      Numero_identificacion: this.state.Numero_identificacion,
      Motivo_consulta: this.state.form1.Motivo_consulta,
      Enfermedad_actual: this.state.form1.Enfermedad_actual,
      Revision_sistemas: this.state.form1.Revision_sistemas,
      Antecedentes_personales: this.state.form1.Antecedentes_personales,
      Examen_fisico: this.state.form1.Examen_fisico,
      Ayudas_diagnosticas: this.state.form1.Ayudas_diagnosticas,
      Diagnostico: this.state.form1.Diagnostico,
      Analisis: this.state.form1.Analisis,
      Conducta: this.state.form1.Conducta,
      Observaciones: this.state.form1.Observaciones,
    }).then((response) => {
      alert("Historia Creada");
      console.log(response);
    });
  };

  lookPatient = (e) => {
    Axios.get(this.state.backend + "/look", {
      params: {
        Numero_identificacion: this.state.Numero_identificacion,
      },
    }).then((response) => {
      if (response.data[0] !== undefined) {
        var x = this.state.Numero_identificacion;
        var y = 0;
        var r = "";
        x.split("").forEach((x) => (y += parseInt(x)));
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
            pin: r.concat(y, y),
          },
        });
      } else {
      }
    });
  };

  startMesssure = (e) => {
    let messageContent = {
      room: this.state.roomName,
      author: "doctor",
      message: "Iniciar_Temperatura",
    };
    socket.emit("send_message", messageContent);

    let messageListNew = [...this.state.messageList];
    messageListNew.push(messageContent);
    this.setState({ messageList: messageListNew });
    console.log(messageListNew);
  };

  render() {
    return (
      <React.Fragment>
        <div className="registerform__outter__outter">
          <div className="registerform__outter">
            <div className="registerform__inner">
              <form id="Demo_1" action="">
                <div className="Text__container__title">
                  <span>Historia Cliníca Consulta</span>
                </div>
                <div className="form-group">
                  <label htmlFor="">Motivo de consulta</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Motivo_consulta"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Motivo_consulta}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Enfermedad Actual</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Enfermedad_actual"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Enfermedad_actual}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Revision por sistemas</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Revision_sistemas"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Revision_sistemas}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Antecedentes personales</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Antecedentes_personales"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Antecedentes_personales}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Exámen físico</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Examen_fisico"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Examen_fisico}
                  />
                </div>
              </form>
              <form id="Demo_2" action="">
                <div className="Text__container__title">
                  <span>Historia Cliníca Consulta</span>
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    Ayudas diagnosticas o examenes paraclínicos
                  </label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Ayudas_diagnosticas"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Ayudas_diagnosticas}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Diagnostico</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Diagnostico"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Diagnostico}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Análisis</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Analisis"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Analisis}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Conducta</label>
                  <textarea
                    className="form-control large"
                    style={{ height: "80px" }}
                    type="text"
                    name="Conducta"
                    onChange={(value) => {
                      this.handleChange(value);
                    }}
                    id="17"
                    value={this.state.form1.Conducta}
                  />
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
                      value={this.state.form1.Observaciones}
                    />
                  </div>
                  <div></div>
                  <div className="Button__arriba" onClick={this.addHistory}>
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

              <div onClick={this.handleNext}>
                <span className="arrow">&#xbb;</span>
              </div>
            </div>
          </div>
          <div></div>
          <div className="Registerform__borrar__actualizar">
            <div className="Registerform__borrar__actualizar__inner">
              <div className="Text__container__title">
                <span>Informacion Paciente</span>
              </div>
              <div className="form-group">
                <label htmlFor="">Número de identificación</label>
                <input
                  className="form-control"
                  type="text"
                  style={{ height: "40px" }}
                  name="Numero_identificacion_buscar"
                  value={this.state.Numero_identificacion}
                  id="37"
                />
                <label htmlFor="">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  style={{ height: "40px" }}
                  name="Numero_identificacion_buscar"
                  value={
                    this.state.form.Primer_nombre +
                    " " +
                    this.state.form.Segundo_nombre
                  }
                  id="37"
                />
                <label htmlFor="">Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  style={{ height: "40px" }}
                  name="Numero_identificacion_buscar"
                  value={
                    this.state.form.Primer_apellido +
                    " " +
                    this.state.form.Segundo_apellido
                  }
                  id="37"
                />
                <label htmlFor="">Edad</label>
                <input
                  className="form-control"
                  type="text"
                  style={{ height: "40px" }}
                  name="Numero_identificacion_buscar"
                  value={this.state.form.Edad + " Años"}
                  id="37"
                />
              </div>
              <div className="Button__arriba" onClick={this.startMesssure}>
                <div className="Button__Crear">TOMAR TEMPERATURA</div>
              </div>
              <div className="Button__arriba" onClick={this.startMesssure}>
                <div className="Button__Crear">TOMAR OXIMETRÍA</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConsultaForm;
