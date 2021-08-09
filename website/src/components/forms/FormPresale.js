import React from "react";
import Icon from "../../assets/img/iconFiesta.svg";
import "./Form.css";

export default function FormPresale(props) {
  return (
    <div>
      <div className="bgForm">
        <div className="col-12 align-text">
          <img alt={props.alt} src={Icon} />
          <h5>Bienvenido al Presale!</h5>
          <p>
            Dejanos tus datos para contactarte cuando este disponible la
            preventa.
          </p>
        </div>

        <div className="col-12 mb-3">
          <input
            type="text"
            className="form-control fontInput"
            placeholder="Full name"
          ></input>
        </div>
        <div className="col-12 mb-3">
          <input
            type="mail"
            className="form-control fontInput"
            id="mail"
            placeholder="Email"
          ></input>
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            className="form-control fontInput"
            placeholder="Country"
          ></input>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mb-3 ">
            <select className="form-select" aria-label="Default select example">
              <option >+57</option>
              <option value="1">+1</option>
              <option value="2">+56</option>
              <option value="3">+50</option>
            </select>
          </div>
          <div className="col-lg-8 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control fontInput"
              placeholder="Phone"
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-6 col-sm-12">
            <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
              <p>Terms & Conditions</p>
            </a>
          </div>
          <div className="col-lg-6 col-sm-6 col-sm-12">
            <p>Enviarme noticias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
