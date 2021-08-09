import React from "react";
import Form from "../components/forms/Form";
import Thumb from "../assets/img/thumbUp.png";

export default function BuyToken() {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 bgImage">
        <img src={Thumb} />
        <h2>Hola, Bienvenido!</h2>
        <p className="fontMedium">
          Adquirir INTRA coins es muy facil, si estas aqui es porque ya tienes
          tu wallet conecatada pro medio de un broker a nuestro sistema, a
          continuacion encontrar el modulo para hacer swap, buy/sell coins en un
          mismo lugar, exitos!
        </p>
        <br></br>
        <h6>Wallet</h6>
        <p className="fontMedium">121098732364875 - 34</p>
        <br></br>
        <h6>Saldo</h6>
        <p className="fontMedium">$1.000</p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <Form />
      </div>
      <div className="form-check " >
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        <label className="form-check-label" for="flexCheckDefault">
         <p className="fontMedium">Cancelar operación </p> 
        </label>
      </div>
    </div>
  );
}
