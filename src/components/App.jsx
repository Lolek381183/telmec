import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Room from "../pages/Room.jsx";
import Paciente from "../pages/Pacientes.jsx";
import ConsultaNP from "../pages/ConsultaNP";
import Presencial from "../pages/Presencial";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route
            path="/room/:parameter1"
            render={(props) => <Room {...props} />}
          />
          <Route exact path="/pacientes" component={Paciente} />
          <Route exact path="/consultaNP" component={ConsultaNP} />
          <Route exact path="/presencial" component={Presencial} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
