import React from "react";
import "./styles/RegisterForm.css";

class ConsultaForm extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div className="registerform__outter1">
        <div className="registerform__inner">
          <form id="Form" action="">
            <div className="Text__container__title">
              <span>Historia Cliníca Consulta</span>
            </div>
            <div className="form-group">
              <label htmlFor="">Motivo de la consulta</label>
              <textarea
                className="form-control large"
                style={{ height: "40px", width: "100%" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Enfermedad actual</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Revisión por sistemas</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Antecedentes personales</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Examen físico</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Ayudas diagnosticas o examenes paraclínicos
              </label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Diagnostico</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Analisis</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Conducta</label>
              <textarea
                className="form-control large"
                style={{ height: "40px" }}
                type="text"
                name="Posology"
                id="6"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ConsultaForm;
