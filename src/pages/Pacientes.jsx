import React from "react";
import RegisterFrom from "../components/RegisterForm.jsx";
import "./styles/Newuser.css";
import Axios from "axios";

class Paciente extends React.Component {
  constructor(props) {
    super();
    this.state = {
      backend: "https://backend.telemec.health",
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
        <div className="New__user">
          <div className="New__user__inner">
            <div>
              <RegisterFrom />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Paciente;
