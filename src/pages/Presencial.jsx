import React from "react";
import Axios from "axios";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

import Logo from "../images/Logo1.jpg";
import Logo_empresa from "../images/logogris.png";

import "./styles/Presencial.css";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#0000",
  },
  upper_header: {
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
    borderBottom: "0.1px",
    borderBottomColor: "black",
    height: "100px",
  },
  down_header: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "10px",
    flexDirection: "row",
    borderBottom: "0.3px",
    borderBottomColor: "black",
    height: "40px",
  },
  info_medico: {
    width: "55%",
    color: "black",
    fontSize: "8px",
    textAlign: "right",
    marginTop: "36px",
    marginRight: "5px",
    fontWeight: "10",
  },
  telehealth_logo: {
    width: "35%",
    marginTop: 35,
  },
  telehealth_logo_inner: {
    width: "100%",
  },
  img_empresa: {
    width: "13%",
    height: "70%",
    margin: 20,
  },
  img_empresa_inner: {
    width: "100%",
    marginLeft: "0%",
  },
  pre_paciente: {
    fontSize: "8px",
    marginTop: "2px",
    width: "38%",
  },
  pre_paciente_1: {
    fontSize: "8px",
    marginTop: "2px",
    width: "33%",
    textAlign: "left",
    marginLeft: "20px",
  },
  pre_paciente_2: {
    fontSize: "8px",
    marginTop: "2px",
    marginLeft: "10px",
    width: "33%",
    textAlign: "left",
  },
  info_paciente: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "10px",
    flexDirection: "row",
    borderBottom: "0.3px",
    borderBottomColor: "black",
    height: "58px",
    lineHeight: "1.5px",
  },
  consulta: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "20px",
    fontSize: "10px",
  },
  info_doctor: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "20px",
    flexDirection: "row",
    lineHeight: "1.5px",
  },
  firma: {
    marginTop: "30px",
    width: "90%",
    marginLeft: "5%",
    fontSize: "8px",
  },
  firma_img: {
    width: "10%",
    marginLeft: "35%",
    marginBottom: "10px",
    borderBottom: "0.3px",
    borderBottomColor: "black",
  },
});

class Presencial extends React.Component {
  constructor(props) {
    super(props);
    const { parameter1 } = this.props.match.params;
    this.state = {
      backend: "http://localhost:3001",
      counter: 0,
      Paciente_encontrado: "",
      Numero_identificacion: parameter1,
      document: <Document></Document>,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
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
      register: {
        Nombre: "",
        Apellido: "",
        Especialidad: "",
        Identificacion: "",
        RM: "",
        Email: "",
        Password: "",
        Empresa: "",
        Firma: "",
      },
    };
    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    }).then((response) => {
      if (response.data.error) {
        this.props.history.push("/login");
      }
    });
    this.lookPatient();
    this.lookUser();
  }
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
        document.getElementById("dot1").style.backgroundColor =
          "rgba(192, 25, 41, 0.864)";
        document.getElementById("dot2").style.backgroundColor =
          "rgba(192, 25, 41, 0.624)";

        this.setState({
          counter: 0,
        });
        break;
      case 1:
        document.getElementById("Demo_1").style.display = "none";
        document.getElementById("Demo_2").style.display = "block";
        document.getElementById("dot1").style.backgroundColor =
          "rgba(192, 25, 41,  0.624)";
        document.getElementById("dot2").style.backgroundColor =
          "rgba(192, 25, 41, 0.864)";

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
    Axios.post(
      this.state.backend + "/createhistory",
      {
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
      },
      { withCredentials: true }
    ).then((response) => {
      this.createDocument();
      alert("Historia Creada y Documento Creado");
      console.log(response);
    });
  };

  lookPatient = (e) => {
    Axios.get(this.state.backend + "/look", {
      withCredentials: true,
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

  lookUser = (e) => {
    Axios.get(this.state.backend + "/lookUA", {
      withCredentials: true,
    }).then((response) => {
      console.log(response);
      if (response.data[0] !== undefined) {
        this.setState({
          register: {
            Nombre: response.data[0].nombre,
            Apellido: response.data[0].apellido,
            Especialidad: response.data[0].especialidad,
            Identificacion: response.data[0].identificacion,
            RM: response.data[0].rm,
            Email: response.data[0].email,
            Empresa: response.data[0].empresa,
            Firma: response.data[0].firma,
          },
        });
      } else {
        alert("Usuario no encontrado");
      }
    });
  };

  createDocument = (e) => {
    this.setState({
      document: (
        <Document>
          <Page size="A4" style={styles.page}>
            <View fixed>
              <View style={styles.upper_header}>
                <View style={styles.telehealth_logo}>
                  <Image
                    style={styles.telehealth_logo__inner}
                    src={Logo}
                  ></Image>
                </View>
                <View style={styles.info_medico}>
                  <Text>
                    {this.state.register.Nombre +
                      " " +
                      this.state.register.Apellido}
                    {"\n"}
                    {this.state.register.Especialidad}
                    {"\n"}
                    Calle 10 # 42-65 oficina 333. Plaza del Poblado
                    {"\n"}
                    {this.state.register.Email}
                    {"\n"}
                    {this.state.register.RM}
                  </Text>
                </View>
                <View style={styles.img_empresa}>
                  <Image
                    style={styles.img_empresa_inner}
                    src={Logo_empresa}
                  ></Image>
                </View>
              </View>
              <View style={styles.down_header}>
                <View style={styles.pre_paciente}>
                  <Text>
                    Paciente:{" "}
                    {this.state.form.Primer_nombre +
                      " " +
                      this.state.form.Segundo_nombre +
                      " " +
                      this.state.form.Primer_apellido +
                      " " +
                      this.state.form.Segundo_apellido}
                    {"\n"}
                    {"\n"}
                    Direccion: {this.state.form.Direccion_residencial}
                  </Text>
                </View>
                <View style={styles.pre_paciente_1}>
                  <Text>
                    Identificacion: CC {this.state.form.Numero_identificacion}
                    {"\n"}
                    {"\n"}
                    Oficio: {this.state.form.Ocupacion}
                  </Text>
                </View>
                <View style={styles.pre_paciente_2}>
                  <Text style={{ fontWeight: "heavy" }}>
                    Sexo: {this.state.form.Sexo}
                    {"\n"}
                    {"\n"}
                    Telefono: {this.state.form.Telefono}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.info_paciente}>
              <View style={styles.pre_paciente}>
                <Text>
                  Fecha de Consulta: {this.state.date}
                  {"\n"}
                  Estado Civil: {this.state.form.Estado_civil}
                  {"\n"}
                  Responsable:{" "}
                  {this.state.form.Nombre_responsable +
                    " " +
                    this.state.form.Apellido_responsable}
                  {"\n"}
                  Acompañante:{" "}
                  {this.state.form.Nombre_responsable +
                    " " +
                    this.state.form.Apellido_responsable}
                </Text>
              </View>
              <View style={styles.pre_paciente_1}>
                <Text>
                  Hora de Consulta: {this.state.time}
                  {"\n"}
                  Entidad: {this.state.form.Entidad}
                  {"\n"}
                  Teléfono: {this.state.form.Telefono_responsable}
                  {"\n"}
                  Teléfono: {this.state.form.Telefono_responsable}
                </Text>
              </View>
              <View style={styles.pre_paciente_2}>
                <Text style={{ fontWeight: "heavy" }}>
                  Fecha de Nacimiento: {this.state.form.Fecha_nacimiento}
                  {"\n"}
                  Edad: {this.state.form.Edad}
                  {"\n"}
                  Parentezco: {this.state.form.Parentezco_responsable}
                  {"\n"}
                  Parentezco: {this.state.form.Parentezco_responsable}
                </Text>
              </View>
            </View>
            <View style={styles.consulta}>
              <Text>
                Motivo de consulta:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Motivo_consulta}
                </Text>
                {"\n"}
                {"\n"}
                Enfermedad Actual:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Enfermedad_actual}
                </Text>
                {"\n"}
                {"\n"}
                Revision por Sistemas:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Revision_sistemas}
                </Text>
                {"\n"}
                {"\n"}
                Antecedentes Personales:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Antecedentes_personales}
                </Text>
                {"\n"}
                {"\n"}
                Exámen Físico:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Examen_fisico}
                </Text>
                {"\n"}
                {"\n"}
                Ayudas diagnosticas o examenes paraclínicos:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Ayudas_diagnosticas}
                </Text>
                {"\n"}
                {"\n"}
                Diagnostico:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Diagnostico}
                </Text>
                {"\n"}
                {"\n"}
                Análisis:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Analisis}
                </Text>
                {"\n"}
                {"\n"}
                Conducta:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Conducta}
                </Text>
                {"\n"}
                {"\n"}
                Observaciones:
                {"\n"}
                {"\n"}
                <Text style={{ fontSize: "8px" }}>
                  {this.state.form1.Observaciones}
                </Text>
              </Text>
            </View>
            <View style={styles.info_doctor}>
              <View style={styles.pre_paciente}>
                <Text>
                  Profesional Tratante:{" "}
                  {this.state.register.Nombre +
                    " " +
                    this.state.register.Apellido}
                </Text>
              </View>
              <View style={styles.pre_paciente_1}>
                <Text>
                  Identificación: {this.state.register.Identificacion}
                </Text>
              </View>
              <View style={styles.pre_paciente_2}>
                <Text style={{ fontWeight: "heavy" }}>
                  R.M. No: {this.state.register.RM}
                </Text>
              </View>
            </View>
            <View style={styles.firma}>
              <View>
                <Image
                  style={styles.firma_img}
                  src={
                    "http://bucketeer-b4039c23-9379-4a72-bb94-b376f01eaf10.s3.amazonaws.com/firmas/" +
                    this.state.register.Firma
                  }
                ></Image>
              </View>
              <Text style={{ textAlign: "center" }}>
                {this.state.register.Nombre +
                  " " +
                  this.state.register.Apellido}
                {"\n"}
                CC: {this.state.register.Identificacion} RM:{" "}
                {this.state.register.RM}
                {"\n"}
                {this.state.register.Especialidad}
              </Text>
            </View>
          </Page>
        </Document>
      ),
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Presencial">
          <div className="Presencial__inner">
            <div className="Presencial__outter__outter">
              <div className="Presencial__outter">
                <div className="Presencial__inner__inner">
                  <form id="Demo_1" action="">
                    <div className="Text__container__title">
                      <span>Historia Cliníca Consulta</span>
                    </div>
                    <div className="Blank__space"></div>
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
                    </div>
                  </form>
                </div>
                <div className="passControl">
                  <div
                    onClick={(e) => this.setComponent(0)}
                    className="dot"
                    id="dot1"
                  >
                    P
                  </div>
                  <div
                    onClick={(e) => this.setComponent(1)}
                    className="dot"
                    id="dot2"
                  >
                    S
                  </div>
                </div>
              </div>
              <div></div>
              <div className="Presencial__buscar__actualizar">
                <div className="Presencial__buscar__actualizar__inner">
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
                  <div className="Button__arriba" onClick={this.addHistory}>
                    <div className="Button__Crear">AGREGAR HISTORIA</div>
                  </div>
                  <PDFDownloadLink
                    className="text-reset text-decoration-none"
                    document={this.state.document}
                  >
                    <div className="Button__arriba text-reset text-decoration-none">
                      <div className="Button__Crear">DESCARGAR DOCUMENTO</div>
                    </div>
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Presencial;
