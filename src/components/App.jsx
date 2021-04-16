import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Room from "../pages/Room.jsx";
import Newuser from "../pages/NewUser.jsx";
import Newregister from "../pages/NewRegister";
import Presencial from "../pages/Presencial";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/room" component={Room} />
          <Route exact path="/newuser" component={Newuser} />
          <Route exact path="/newregister" component={Newregister} />
          <Route exact path="/presencial" component={Presencial} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
