import React from "react";

import ConsultaForm from "../components/ConsultaFrom.jsx";
import "./styles/Newregister.css";
import Axios from "axios";

class Presencial extends React.Component {
  constructor(props) {
    super(props);
    const { parameter1 } = this.props.match.params;
    this.state = {
      roomName: parameter1,
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
        <div className="New__register">
          <div className="New__register__inner">
            <div>
              <ConsultaForm Numero_identificacion={this.state.roomName} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Presencial;
