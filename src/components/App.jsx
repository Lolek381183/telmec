import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home.jsx";
import PyS from "../pages/PyS.jsx";
import Login from "../pages/Login.jsx";
import RoomPrivate from "../pages/RoomPrivate.jsx";
import RoomPublic from "../pages/RoomPublic.jsx";
import RoomPrivateSensor from "../pages/RoomPrivateSensor.jsx";
import RoomPublicSensor from "../pages/RoomPublicSensor.jsx";
import Paciente from "../pages/Pacientes.jsx";
import ConsultaNP from "../pages/ConsultaNP.jsx";
import Presencial from "../pages/Presencial.jsx";
import Layout from "../components/Layout.jsx";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/PyS" component={PyS} />
            <Route exact path="/login" component={Login} />
            <Route
              path="/roompri/:parameter1"
              render={(props) => <RoomPrivate {...props} />}
            />
            <Route
              path="/roompub/:parameter1"
              render={(props) => <RoomPublic {...props} />}
            />
            <Route
              path="/roomprisen/:parameter1/:parameter2"
              render={(props) => <RoomPrivateSensor {...props} />}
            />
            <Route
              path="/roompubsen/:parameter1"
              render={(props) => <RoomPublicSensor {...props} />}
            />
            <Route exact path="/pacientes" component={Paciente} />
            <Route exact path="/consultaNP" component={ConsultaNP} />
            <Route
              path="/presencial/:parameter1"
              render={(props) => <Presencial {...props} />}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
