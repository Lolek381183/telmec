import React from "react";
import Axios from "axios";

import "./styles/Medicos.css";

class Medicos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      form: {
        Numero_identificacion_buscar: "",
      },
      backend: "http://localhost:3001",
    };

    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    }).then((response) => {
      if (response.data.error) {
        this.props.history.push("/login");
      }
      if (response.data.nombre !== "Almighty") {
        this.props.history.push("/login");
      }
    });
  }

  componentDidMount() {}

  handleChangeRegister = (e) => {
    this.setState({
      register: { ...this.state.register, [e.target.name]: e.target.value },
    });
    console.log(this.state.register);
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({
      register: { ...this.state.register, [e.target.name]: file },
    });
  };

  Register = (e) => {
    Axios.post(
      this.state.backend + "/register",
      {
        Nombre: this.state.register.Nombre,
        Apellido: this.state.register.Apellido,
        Especialidad: this.state.register.Especialidad,
        Identificacion: this.state.register.Identificacion,
        Rm: this.state.register.RM,
        Email: this.state.register.Email,
        Password: this.state.register.Password,
        Empresa: this.state.register.Empresa,
        Firma: this.state.register.Firma.name,
      },
      { withCredentials: true }
    ).then((response) => {
      console.log(response);
      console.log(response);
      this.uploadFile(this.state.register.Firma);
    });
  };

  uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", e); // appending file
    await Axios.post(this.state.backend + "/upload", formData)
      .then((res) => {
        console.log(res);
        alert("Usuario Creado");
      })
      .catch((err) => console.log(err));
  };

  lookUser = (e) => {
    Axios.get(this.state.backend + "/lookU", {
      withCredentials: true,
      params: {
        Numero_identificacion: this.state.form.Numero_identificacion_buscar,
      },
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

  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  deleteUser = (e) => {
    if (this.state.form.Numero_identificacion_buscar !== "") {
      Axios.delete(
        this.state.backend +
          `/deleteU/${this.state.form.Numero_identificacion_buscar}`,
        {
          withCredentials: true,
        }
      ).then((response) => {
        Axios.delete(
          this.state.backend + `/deletef/${this.state.register.Firma}`
        ).then((response) => {
          alert("Usuario Eliminado");
        });
      });
    }
  };

  deleteProduct = (e) => {
    Axios.delete(
      this.state.backend + `/delete/${this.state.updatedProduct}`
    ).then((response) => {
      if (this.state.img_1_delete !== null) {
        Axios.delete(
          this.state.backend + `/deletei/${this.state.img_1_delete}`
        ).then((response) => {
          if (this.state.img_2_delete !== null) {
            Axios.delete(
              this.state.backend + `/deletei/${this.state.img_2_delete}`
            ).then((response) => {
              if (this.state.img_3_delete !== null) {
                Axios.delete(
                  this.state.backend + `/deletei/${this.state.img_3_delete}`
                ).then((response) => {
                  if (this.state.img_4_delete !== null) {
                    Axios.delete(
                      this.state.backend + `/deletei/${this.state.img_4_delete}`
                    ).then((response) => {
                      if (this.state.img_5_delete !== null) {
                        Axios.delete(
                          this.state.backend +
                            `/deletei/${this.state.img_5_delete}`
                        ).then((response) => {
                          console.log("listo");
                        });
                      }
                      console.log("listo");
                    });
                  }
                  console.log("listo");
                });
              }
              console.log("listo");
            });
          }
          console.log("listo");
        });
      }
      console.log("listo");
    });
    alert("Producto borrado");
  };

  render() {
    return (
      <React.Fragment>
        <div className="Medicos__container__outter">
          <div className="Medicos__container__inner">
            <div className="Medicos__outter">
              <div className="Medicos__inner">
                <form className="Demo_1" id="Demo_1" action="">
                  <div className="Text__container__title">
                    <span>Agrega un médico</span>
                  </div>
                  <div className="Blank__space"></div>
                  <div className="two__rows">
                    <div className="form-group">
                      <label htmlFor="">Nombre</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Nombre"
                        onChange={(value) => {
                          this.handleChangeRegister(value);
                        }}
                        value={this.state.register.Nombre}
                        id="1"
                      />
                    </div>
                    <div></div>
                    <div className="form-group">
                      <label htmlFor="">Apellido</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Apellido"
                        onChange={(value) => {
                          this.handleChangeRegister(value);
                        }}
                        value={this.state.register.Apellido}
                        id="2"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Especialidad</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Especialidad"
                      onChange={(value) => {
                        this.handleChangeRegister(value);
                      }}
                      value={this.state.register.Especialidad}
                      id="3"
                    />
                  </div>

                  <div className="two__rows">
                    <div className="form-group">
                      <label htmlFor="">Identificación</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Identificacion"
                        onChange={(value) => {
                          this.handleChangeRegister(value);
                        }}
                        value={this.state.register.Identificacion}
                        id="1"
                      />
                    </div>
                    <div></div>
                    <div className="form-group">
                      <label htmlFor="">R.M</label>
                      <input
                        className="form-control"
                        type="text"
                        name="RM"
                        onChange={(value) => {
                          this.handleChangeRegister(value);
                        }}
                        value={this.state.register.RM}
                        id="2"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Email"
                      onChange={(value) => {
                        this.handleChangeRegister(value);
                      }}
                      value={this.state.register.Email}
                      id="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Contraseña</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Password"
                      onChange={(value) => {
                        this.handleChangeRegister(value);
                      }}
                      id="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Empresa</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Empresa"
                      onChange={(value) => {
                        this.handleChangeRegister(value);
                      }}
                      value={this.state.register.Empresa}
                      id="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Firma (fondo blanco)</label>
                    <input
                      onChange={this.handleFileChange}
                      className="form-control"
                      type="file"
                      name="Firma"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div></div>
          <div className="Medicos__buscar__actualizar">
            <div className="Medicos__buscar__actualizar__inner">
              <div className="Text__container__title">
                <span>Encuentra Médicos</span>
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
                <div className="Button__arriba" onClick={this.lookUser}>
                  <div className="Button__Crear">BUSCAR</div>
                </div>
                <div className="Blank__space"></div>
                <div className="Text__container__title">
                  <span>Administra Médicos</span>
                </div>
                <div className="Button__arriba" onClick={this.Register}>
                  <div className="Button__Crear">AGREGAR</div>
                </div>
                <div className="Button__arriba" onClick={this.deleteUser}>
                  <div className="Button__Crear">BORRAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Medicos;
