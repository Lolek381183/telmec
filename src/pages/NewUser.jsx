import React from "react";
import RegisterFrom from "../components/RegisterForm.jsx";
import "./styles/Newuser.css";
import Axios from "axios";
import Bottombar from "../components/Bottombar";
import Navbar from "../components/Navbar";

class Newuser extends React.Component {
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
        <Navbar></Navbar>
        <div className="New__user">
          <div className="New__user__inner">
            <div>
              <RegisterFrom />
            </div>
          </div>
        </div>
        <Bottombar></Bottombar>
      </React.Fragment>
    );
  }
}

export default Newuser;
