import React from "react";
import RegisterFrom from "../components/RegisterForm.jsx";
import ConsultaForm from "../components/ConsultaFrom.jsx";
import "./styles/Newregister.css";
import Axios from "axios";
import Bottombar from "../components/Bottombar";
import Navbar from "../components/Navbar";

class Presencial extends React.Component {
  constructor(props) {
    super();
    this.state = {
      backend: "https://telemec.herokuapp.com",
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="New__register">
          <div className="New__register__inner">
            <div>
              <RegisterFrom />
            </div>
            <div></div>
            <div>
              <ConsultaForm />
            </div>
          </div>
        </div>
        <Bottombar></Bottombar>
      </React.Fragment>
    );
  }
}

export default Presencial;
