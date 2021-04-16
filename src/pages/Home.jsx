import React from "react";
import home from "../images/—Pngtree—computer mac_4971106.png";
import Bottombar from "../components/Bottombar";
import Navbar from "../components/Navbar";

import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="Home__outter">
          <div className="Home">
            <div className="Animation">
              <img src={home} alt="" className="Animation__Img" />
            </div>
            <div></div>
            <div className="Home__text_outter">
              <div className="Home__text">
                <p className="Welcome__text">
                  Bienvenidos a mecHub una plataforma de telemedicina a tu
                  medida, suple tus necesidades y las de tus clientes
                </p>
                <p className="Title__text">¿Cómo usarlo?</p>
                <p className="Normal__text">
                  {" "}
                  Dependiendo de tus necesidades habilitaremos diferentes
                  servicios que pueden ayudarte a organizar rapida y
                  confiablemente tu información y la e tus pacientes, no olvides
                  preguntar por la nueva maleta de telemedicina mecMaleta.
                </p>
                <p className="Title__text">¿Puedo probarlo?</p>
                <p className="Normal__text">
                  {" "}
                  Si estas interesado en adquirir alguno de nuestros servicios
                  en la nube, no dudes en ponerte en contacto con nuestros
                  asesores, siempre estaremos atentos a cualquier inquietud que
                  se presente en su proceso de compra.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="Conclusion__Text">
              Medicina Computacional es una empresa líder en comercialización de
              herramientas tecnológicas que actuan como ayudas médicas a la hora
              de diagnosticar, atender y revisar la condición de un paciente,
              atendemos un gran número de clientes y para cada uno de ellos
              contamos con soluciones innovadoras y varguandistas.
            </div>
          </div>
        </div>
        <Bottombar></Bottombar>
      </React.Fragment>
    );
  }
}

export default Home;
