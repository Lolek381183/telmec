import React from "react";

import Telemedicina_info from "../images/Producto_telemedicina.png";
import Maleta_Tel from "../images/Maleta_tel.png";
import Logo from "../images/Logo1.jpg";
import manilla from "../images/Manilla.png";
import iphone from "../images/Iphone.png";
import Demostrarion from "../images/Demostrarion.mp4";

import "./styles/PyS.css";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="PyS__Telemedicina">
          <div className="PyS__Telemedicina__inner">
            <div className="PyS__Telemedicina__inner__info">
              <div className="PyS__Telemedicina__inner__info__1">
                <div className="PyS__Telemedicina__inner__info__text__1">
                  Las consultas ya son virtuales
                </div>
                <div className="PyS__Telemedicina__inner__info__text__2">
                  El mundo virtual es una realidad, y la medicina no podía
                  quedarse atras, por esto creamos: TeleHealth®
                </div>
                <div className="PyS__Telemedicina__inner__info__text__3">
                  Proporcionamos un espacio de encuentro digital en el cual los
                  profesionales de la salud y sus pacientes pueden conectarse de
                  una forma rápida y segura.
                </div>
                <div className="Blank__space"></div>
                <div className="PyS__Telemedicina__inner__info__buttons">
                  <div className="Home__welcome__button__video">VER VIDEO</div>
                  <div className="Blank__space__vertical"></div>
                  <div className="Home__welcome__button__video">CONOCE MÁS</div>
                </div>
              </div>
            </div>
            <div className="PyS__Telemedicina__inner__img">
              <img
                src={Telemedicina_info}
                alt="Telehealth"
                className="PyS__Telemedicina__inner__img__1"
              />
            </div>
          </div>
        </div>
        <div className="PyS__Telemedicina__1">
          <div className="PyS__Telemedicina__inner__1">
            <div className="PyS__Telemedicina__inner__info">
              <div className="PyS__Telemedicina__inner__info__1">
                <div className="PyS__Telemedicina__inner__info__text__1">
                  Las medidas siguen siendo importantes
                </div>
                <div className="PyS__Telemedicina__inner__info__text__2">
                  No podíamos prescindir de médidas necesarias durante la
                  consulta, por esto creamos: la Consulta Telesensórica
                  TeleHealth®
                </div>
                <div className="PyS__Telemedicina__inner__info__text__3">
                  Por medio de uno de nuestas maletas inteligentes podemos
                  desplazar un amplio rango de sensores biomédicos al domicilio
                  del paciente. Mientras tanto el profesional de la salud puede
                  activarlos a larga distancia y recbir sus resultados en timepo
                  real.
                </div>
                <div className="Blank__space"></div>
                <div className="PyS__Telemedicina__inner__info__buttons">
                  <div className="Home__welcome__button__video">VER VIDEO</div>
                  <div className="Blank__space__vertical"></div>
                  <div className="Home__welcome__button__video">CONOCE MÁS</div>
                </div>
              </div>
            </div>
            <div className="PyS__Telemedicina__inner__img">
              <img
                src={Maleta_Tel}
                alt="Telehealth"
                className="PyS__Telemedicina__inner__img__1"
              />
              <img
                src={Logo}
                alt="Telehealth"
                className="PyS__Telemedicina__inner__img__1__logo"
              />
            </div>
          </div>
        </div>
        <div className="PyS__Telemedicina">
          <div className="PyS__Telemedicina__inner__2">
            <div className="PyS__Telemedicina__inner__info">
              <div className="PyS__Telemedicina__inner__info__1">
                <div className="PyS__Telemedicina__inner__info__text__1">
                  Tus datos médicos son importantes
                </div>
                <div className="PyS__Telemedicina__inner__info__text__2">
                  La era del papel esta pasando y los datos son guardados en la
                  nube, los tuyos no se quedarán atras, por esto creamos: el
                  Brazalete TeleHealth®
                </div>
                <div className="PyS__Telemedicina__inner__info__text__3">
                  Es un espacio en linea en el cual podras guardar todos tus
                  datos médicos y verlos cuando desees, además podras ver
                  gráficas de desempeño a lo largo del tiempo. Con esto esperaos
                  que tus examenes, consultas y demás procedimientos medicos
                  esten guarados en tu brazalete y no en una gran y poco
                  amigable carpeta archivadora.
                </div>
                <div className="Blank__space"></div>
                <div className="PyS__Telemedicina__inner__info__buttons">
                  <div className="Home__welcome__button__video">VER VIDEO</div>
                  <div className="Blank__space__vertical"></div>
                  <div className="Home__welcome__button__video">CONOCE MÁS</div>
                </div>
              </div>
            </div>
            <div className="PyS__Telemedicina__inner__img">
              <div className="PyS__Telemedicina__inner__img__inner">
                <div className="PyS__Telemedicina__inner__img__inner__manilla">
                  <img
                    src={`${manilla}`}
                    alt="Arrow"
                    className="manilla__img"
                    onClick={this.nextContent}
                  />
                </div>
                <div className="PyS__Telemedicina__inner__img__inner__iphone">
                  <img
                    src={`${iphone}`}
                    alt="Arrow"
                    className="iphone__img"
                    onClick={this.nextContent}
                  />

                  <video className="video__img" autoPlay loop muted>
                    <source src={`${Demostrarion}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
