import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import RoomPrivate from "../pages/RoomPrivate.jsx";
import RoomPublic from "../pages/RoomPublic.jsx";
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route
              path="/roompri/:parameter1"
              render={(props) => <RoomPrivate {...props} />}
            />
            <Route
              path="/roompub/:parameter1"
              render={(props) => <RoomPublic {...props} />}
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
