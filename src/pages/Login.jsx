import React from "react";
import "./styles/Login.css";
import Logo from "../images/MEC.png";
import Axios from "axios";
import Bottombar from "../components/Bottombar";
import Navbar from "../components/Navbar";

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
      backend: "https://telemec.herokuapp.com",
    };
  }

  componentDidMount() {
    document.getElementById("singup").style.display = "none";
    document.getElementById("login").style.display = "block";
    Axios.get(this.state.backend + "/profile", {
      withCredentials: true,
    }).then((response) => {
      console.log(response);
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

  handleLogin = (e) => {
    document.getElementById("singup").style.display = "none";
    document.getElementById("login").style.display = "block";
    if (this.state.login) {
      this.Login();
    }
    this.setState({
      login: true,
    });
  };

  handleSingup = (e) => {
    document.getElementById("singup").style.display = "block";
    document.getElementById("login").style.display = "none";
    if (!this.state.login) {
      this.Register();
    }
    this.setState({
      login: false,
    });
  };

  handleChangeRegister = (e) => {
    this.setState({
      register: { ...this.state.register, [e.target.name]: e.target.value },
    });
  };

  handleChangeLogin = (e) => {
    this.setState({
      loginForm: { ...this.state.loginForm, [e.target.name]: e.target.value },
    });
  };

  Register = (e) => {
    Axios.post(this.state.backend + "/register", {
      Nombre: this.state.register.Nombre,
      Apellido: this.state.register.Apellido,
      Email: this.state.register.Email,
      Password: this.state.register.Password,
    }).then((response) => {
      console.log(response);
      console.log(response);
      alert("Usuario Creado");
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
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="Login__container__outter">
          <div className="Login__container__inner">
            <div className="Login__container">
              <img className="Login__image" src={Logo} alt="Logo" />
            </div>
            <div className="Text__container">
              {!this.state.login ? (
                <p className="Login__text">SING UP</p>
              ) : (
                <p className="Login__text">LOG IN</p>
              )}
            </div>
            <div className="Login__container__text">
              <form id="singup" action="">
                <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Nombre"
                    id="1"
                    onChange={this.handleChangeRegister}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Apellido"
                    id="2"
                    onChange={this.handleChangeRegister}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="Email"
                    id="3"
                    onChange={this.handleChangeRegister}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="Password"
                    id="4"
                    onChange={this.handleChangeRegister}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Confirm password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="5"
                  />
                </div>
              </form>

              <form id="login" action="">
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="Email"
                    id="6"
                    onChange={this.handleChangeLogin}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
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
              <button onClick={this.handleLogin} className="Login__button">
                <div className="Login__button__inner">
                  <span>Log in</span>
                </div>
              </button>
              <div></div>
              <button onClick={this.handleSingup} className="Login__button">
                <div className="Login__button__inner">
                  <span>Sing up</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Bottombar></Bottombar>
      </React.Fragment>
    );
  }
}

export default Login;
