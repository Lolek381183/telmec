import React from "react";
import Axios from "axios";

import Logo from "../images/Logo.png";

import "./styles/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        Nombre: "",
        Apellido: "",
        Email: "",
        Password: "",
      },
      login: true,
      loginForm: {
        Email: "",
        Password: "",
      },
      backend: "http://localhost:3001",
    };

    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    }).then((response) => {
      if (response.data.auth) {
        Axios.post(
          this.state.backend + "/logout",
          {
            Email: "jjaramillo1999@gmail.com",
            Password: "lolek381sandra",
          },
          { withCredentials: true }
        ).then((response) => {
          console.log(response);
          window.location.reload();
        });
      }
    });
  }

  handleChangeLogin = (e) => {
    this.setState({
      loginForm: { ...this.state.loginForm, [e.target.name]: e.target.value },
    });
  };

  Login = (e) => {
    Axios.post(
      this.state.backend + "/login",
      {
        Email: this.state.loginForm.Email,
        Password: this.state.loginForm.Password,
      },
      { withCredentials: true }
    ).then((response) => {
      console.log(response);
      this.props.history.push("/");
      window.location.reload();
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Login__container__outter">
          <div className="Login__container__inner">
            <div className="Login__container">
              <img className="Login__image" src={Logo} alt="Logo" />
            </div>
            <div className="Text__container">
              <div className="Login__text">
                TeleHealth <br />{" "}
                <div style={{ fontWeight: "700", fontSize: "20px" }}>
                  PORTAL MÉDICO
                </div>
              </div>
            </div>
            <div className="Login__container__text">
              <form id="login" action="">
                <div className="form-group">
                  <label htmlFor="">Usuario</label>
                  <input
                    className="form-control"
                    type="email"
                    name="Email"
                    id="6"
                    onChange={this.handleChangeLogin}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Contraseña</label>
                  <input
                    className="form-control"
                    type="password"
                    name="Password"
                    id="7"
                    onChange={this.handleChangeLogin}
                  />
                </div>
              </form>
            </div>
            <div className="Login__buttons">
              <button onClick={this.Login} className="Login__button">
                <div className="Login__button__inner">
                  <span>Ingresar</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
