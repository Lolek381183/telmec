import React from "react";

import home from "../images/EIATmedicalhub.jpg";
import Arrow from "../images/Arrow1.png";
import Esteto from "../images/Esteto.png";
import Nube from "../images/nube.png";
import Telemedicina from "../images/Telemedicina.png";
import Sensores from "../images/Sensores.png";
import Nube1 from "../images/Nube1.png";
import Red from "../images/Red.png";
import Grafico from "../images/Grafico.png";
import Diagnostico from "../images/Diagnostico.png";
import Telemedicina_info from "../images/—Pngtree—computer mac_4971106.png";

import "./styles/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    document.getElementById(
      "Home__especialidades__info__text__Telemedicina"
    ).style.display = "initial";
    document.getElementById(
      "Home__especialidades__info__text__Sensores"
    ).style.display = "none";
    document.getElementById(
      "Home__especialidades__info__text__Nube"
    ).style.display = "none";
    document.getElementById(
      "Home__especialidades__info__text__Red"
    ).style.display = "none";
    document.getElementById(
      "Home__especialidades__info__text__Analisis"
    ).style.display = "none";
    document.getElementById(
      "Home__especialidades__info__text__Diagnostico"
    ).style.display = "none";
  }

  handleEspecialidades = (e) => {
    switch (e) {
      case "Telemedicina":
        document.getElementById(
          "Home__especialidades__info__text__Telemedicina"
        ).style.display = "initial";
        document.getElementById(
          "Home__especialidades__info__text__Sensores"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Nube"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Red"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Analisis"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Diagnostico"
        ).style.display = "none";
        break;
      case "Sensores":
        document.getElementById(
          "Home__especialidades__info__text__Telemedicina"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Sensores"
        ).style.display = "initial";
        document.getElementById(
          "Home__especialidades__info__text__Nube"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Red"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Analisis"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Diagnostico"
        ).style.display = "none";
        break;
      case "Nube":
        document.getElementById(
          "Home__especialidades__info__text__Telemedicina"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Sensores"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Nube"
        ).style.display = "initial";
        document.getElementById(
          "Home__especialidades__info__text__Red"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Analisis"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Diagnostico"
        ).style.display = "none";
        break;
      case "Red":
        document.getElementById(
          "Home__especialidades__info__text__Telemedicina"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Sensores"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Nube"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Red"
        ).style.display = "initial";
        document.getElementById(
          "Home__especialidades__info__text__Analisis"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Diagnostico"
        ).style.display = "none";
        break;
      case "Analisis":
        document.getElementById(
          "Home__especialidades__info__text__Telemedicina"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Sensores"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Nube"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Red"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Analisis"
        ).style.display = "initial";
        document.getElementById(
          "Home__especialidades__info__text__Diagnostico"
        ).style.display = "none";
        break;
      case "Diagnostico":
        document.getElementById(
          "Home__especialidades__info__text__Telemedicina"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Sensores"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Nube"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Red"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Analisis"
        ).style.display = "none";
        document.getElementById(
          "Home__especialidades__info__text__Diagnostico"
        ).style.display = "initial";
        break;
      default:
        console.log("Upps");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="Home__outter">
          <div className="Home">
            <div className="Blank__space"></div>
            <div className="Blank__space disap"></div>
            <div className="Home__welcome">
              <div>
                <div className="Home__welcome__evolucion">
                  La evolución de la medicina
                </div>
                <div className="Home__welcome__text__1">
                  Revolucionamos la medicina con tecnología de punta, y lo
                  hacemos para ti.
                </div>
                <div className="Home__welcome__text__2">
                  Estamos convencidos de que los problemas actuales en salud
                  pueden ser mitigados por la tecnología.
                </div>
                <div className="Blank__space"></div>
                <div className="Home__welcome__button__video">VER VIDEO</div>
              </div>
              <div>
                <img src={home} className="Home__welcome__img" alt="" />
              </div>
              <div className="Home__welcome__buttons">
                <div className="Home__welcome__button">
                  <div className="Home__welcome__button__item">
                    <img
                      src={Esteto}
                      alt="Arrow"
                      className="Home__welcome__button__img"
                    />
                  </div>
                  <div className="Home__welcome__button__item">
                    <div className="Home__welcome__button__text">
                      Especialistas listos para ayudarte
                    </div>
                  </div>
                  <div className="Home__welcome__button__item">
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="Home__welcome__button__arrow"
                    />
                  </div>
                </div>
                <div className="Home__welcome__button__1">
                  <div className="Home__welcome__button__item">
                    <img
                      src={Nube}
                      alt="Arrow"
                      className="Home__welcome__button__img"
                    />
                  </div>
                  <div className="Home__welcome__button__item">
                    <div className="Home__welcome__button__text">
                      Maneja tus datos médicos en la nube
                    </div>
                  </div>
                  <div className="Home__welcome__button__item">
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="Home__welcome__button__arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="Blank__space"></div>

            <div className="Home__especialidades">
              {" "}
              <div className="Home__especialidades__inner">
                <div
                  className="Home__especialidades__item"
                  onClick={() => {
                    this.handleEspecialidades("Telemedicina");
                  }}
                >
                  <img
                    src={Telemedicina}
                    alt="Telemedicina"
                    className="Home__especialidades__img__1"
                  />{" "}
                  <div className="Home__especialidades__text">Telemedicina</div>
                </div>
                <div
                  className="Home__especialidades__item"
                  onClick={() => {
                    this.handleEspecialidades("Sensores");
                  }}
                >
                  <img
                    src={Sensores}
                    alt="Sensores"
                    className="Home__especialidades__img__2"
                  />{" "}
                  <div className="Home__especialidades__text">
                    Sensores médicos
                  </div>
                </div>
                <div
                  className="Home__especialidades__item"
                  onClick={() => {
                    this.handleEspecialidades("Nube");
                  }}
                >
                  <img
                    src={Nube1}
                    alt="Nube"
                    className="Home__especialidades__img__1"
                  />{" "}
                  <div className="Home__especialidades__text">
                    Datos en la nube
                  </div>
                </div>
                <div
                  className="Home__especialidades__item"
                  onClick={() => {
                    this.handleEspecialidades("Red");
                  }}
                >
                  <img
                    src={Red}
                    alt="Red"
                    className="Home__especialidades__img"
                  />{" "}
                  <div className="Home__especialidades__text">
                    Red sensorica
                  </div>
                </div>
                <div
                  className="Home__especialidades__item"
                  onClick={() => {
                    this.handleEspecialidades("Analisis");
                  }}
                >
                  <img
                    src={Grafico}
                    alt="Analisis"
                    className="Home__especialidades__img__1"
                  />{" "}
                  <div className="Home__especialidades__text">
                    Análisis de datos
                  </div>
                </div>
                <div
                  className="Home__especialidades__item"
                  onClick={() => {
                    this.handleEspecialidades("Diagnostico");
                  }}
                >
                  <img
                    src={Diagnostico}
                    alt="Diagnostico"
                    className="Home__especialidades__img"
                  />{" "}
                  <div className="Home__especialidades__text">
                    Diagnostico en línea
                  </div>
                </div>
              </div>
            </div>

            <div className="Blank__space"></div>

            <div className="Home__especialidades__info">
              <div className="Home__especialidades__info__img__outter">
                <img
                  src={Telemedicina_info}
                  alt="Telemedicina"
                  className="Home__especialidades__info__img"
                />{" "}
              </div>
              <div className="Home__especialidades__info__text">
                <div
                  className="Home__especialidades__info__text__item"
                  id="Home__especialidades__info__text__Telemedicina"
                >
                  <div className="Home__especialidades__info__text__1">
                    La telemedicina acortando distancias en un mundo
                    interconectado
                  </div>
                  <div className="Home__especialidades__info__text__2">
                    Por medio de conexiones a larga distancia podemos suplir
                    necesidades en salud en los lugares mas alejados de nuestro
                    país. El internet y su interconectividad ha abierto un nuevo
                    plano de reunión en el cual especialistas a miles de
                    kilometros de distacia pueden examinar y dictaminar un
                    paciente que necesita de su ayuda.
                  </div>
                </div>
                <div
                  className="Home__especialidades__info__text__item"
                  id="Home__especialidades__info__text__Sensores"
                >
                  <div className="Home__especialidades__info__text__1">
                    El uso de sensores dentro de los consultorios hace que las
                    medidas sean más confiables
                  </div>
                  <div className="Home__especialidades__info__text__2">
                    Los sensores digitales proporcionan a las medidas médicas
                    una repetibilidad y acertividad mucho mayor a la que puede
                    llegar un profesional de la salud por si solo. Esto hace que
                    su implementación ayude a detectar cambios en los valores
                    normales de las variables biomédicas de una froma mucho más
                    rápida y efectiva.
                  </div>
                </div>
                <div
                  className="Home__especialidades__info__text__item"
                  id="Home__especialidades__info__text__Nube"
                >
                  <div className="Home__especialidades__info__text__1">
                    Los datos locales solo te sirven a ti, subelos a la nube y
                    ten acceso a ellos en cualquier lugar
                  </div>
                  <div className="Home__especialidades__info__text__2">
                    El almaceniamiento de datos en la nube permite que la
                    información deje de estar concentrada en un solo lugar, y
                    pueda ser analizada solo por una persona, al subir los datos
                    a la nube proporcionamios interconectividad, y hacemos que
                    varios centros y profesionales de salud puedan acceder a
                    ellos, analizarlos y llegar a conclusiones.
                  </div>
                </div>
                <div
                  className="Home__especialidades__info__text__item"
                  id="Home__especialidades__info__text__Red"
                >
                  <div className="Home__especialidades__info__text__1">
                    Una red de sensores que permita el seguimiento de tus signos
                    vitales y tus indicadores de salud
                  </div>
                  <div className="Home__especialidades__info__text__2">
                    Nos encargamos de desplegar sensores médicos a nivel
                    nacional para que tu y los tuyos puedan seguir de cerca el
                    desarrollo de su salud, estos datos una vez tomados son
                    guardados y estan a tu disposición y la de tus profesionales
                    de la salud en todo momento, para así poder llegar a
                    conclusiones y actuar rápidamente en caso de ser necesario.
                  </div>
                </div>
                <div
                  className="Home__especialidades__info__text__item"
                  id="Home__especialidades__info__text__Analisis"
                >
                  <div className="Home__especialidades__info__text__1">
                    Los datos almacenados sin ningún tipo de análisis son datos
                    perdidos
                  </div>
                  <div className="Home__especialidades__info__text__2">
                    A veces, un simple análisis estadistico puede hacer que
                    patrones no tan notorios sean descubiertos en algunas series
                    de tiempo. Esto permite tener diagnosticos más acertados y
                    rápidos tal y como se necesita dentro de algunas ramas de la
                    medicina, sin embargo estas herrramientas estadisticas son
                    poco utilizadas debido a que los datos se guardan en medios
                    físicos.
                  </div>
                </div>
                <div
                  className="Home__especialidades__info__text__item"
                  id="Home__especialidades__info__text__Diagnostico"
                >
                  <div className="Home__especialidades__info__text__1">
                    Muchas veces las consultas virtuales son poco llamativas por
                    que no son definitivas
                  </div>
                  <div className="Home__especialidades__info__text__2">
                    Cada vez son más los especialistas y personas que deciden
                    tener citas o reuniones virtuales uno de los mayores
                    inconvenientes de esta modalidad es la incapacidad de
                    examinar al paciente, así que desarrollamos un sistema
                    telesensorico que le permite al médico tener medidas en
                    tiempo real del paciente que esta tratando, esto mejora
                    mucho la atención vitual.
                  </div>
                </div>
                <div className="Blank__space"></div>
                <Link to="/PyS" className="text-reset text-decoration-none">
                  <div className="Home__especialidades__info__text__button">
                    CONOCE MÁS DE NUESTROS PRODUCTOS
                  </div>
                </Link>
              </div>
              <div className="Home__especialidades__info__img__outter">
                <img
                  src={Telemedicina_info}
                  alt="Telemedicina"
                  className="Home__especialidades__info__img__1"
                />{" "}
              </div>
            </div>
            <div className="Blank__space disap"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
